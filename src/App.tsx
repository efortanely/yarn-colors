import { useState } from 'react';
import { colors } from './yarn-colors/colors';
import { lab } from "d3-color";
import './App.css';

function App() {
  const [color, setColor] = useState<string>("#000000");
  const [colorText, setColorText] = useState<string | undefined>(undefined);
  const [selectedButtonColor, setSelectedButtonColor] = useState<string | undefined>(undefined);
  const [selectedButtonColorName, setSelectedButtonColorName] = useState<string | undefined>(undefined);
  const [selectedButtonColorBrand, setSelectedButtonColorBrand] = useState<string | undefined>(undefined);
  const [selectedButtonColorYarnName, setSelectedButtonColorYarnName] = useState<string | undefined>(undefined);

  let buttonColors = [];

  for(var i=0; i < colors.length; i++){
    const yarnBrand = colors[i].name;
    for(var j=0; j < colors[i].yarns.length; j++){
      const yarnName = colors[i].yarns[j].name;
      for(var k = 0; k < colors[i].yarns[j].colorways.length; k++){
        for(var l = 0; l < colors[i].yarns[j].colorways[k].colors.length; l++){
          const colorName = colors[i].yarns[j].colorways[k].colors[l];
          buttonColors.push({color: colorName.color, name: colorName.name, brand: yarnBrand, yarnName: yarnName});
        }
      }
    }
  }

  return (
    <div className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-2 sm:p-4 text-center">
      <p className='font-medium mb-2'>Color</p>
      {selectedButtonColorName && selectedButtonColor === colorText?
      <div>
        <div className='flex flex-wrap items-center justify-center gap-2 my-2'>
          <p className='text-lg font-medium'>{selectedButtonColorBrand}</p>
          <p className='text-lg font-medium'>{selectedButtonColorYarnName}</p>
        </div>
        <p className="text-2xl">{selectedButtonColorName}</p>
      </div>
      : null}
      <div className='flex flex-wrap items-center justify-center gap-2 my-2'>
          <label className='color-select-label' title="Choose a Color">
            <input type="color" value={color} onChange={e => {setColor(e.target.value); setColorText(e.target.value);}} className="rounded-full h-11 w-11 cursor-pointer"/>
          </label>
          <label className='color-text-label' title="Enter a Color">
            <input type="text" value={colorText} onChange={e=> handleColorText(e)} className="mb-2 mx-2 mt-1 py-2 px-3 pr-[35px] grow bg-slate-50 placeholder-slate-800 dark:placeholder-white rounded-full cursor-text text-slate-800 dark:text-slate-50 shadow-inner dark:bg-slate-700 border-none focus:outline-none"/>
          </label>
      </div>
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {[...buttonColors]
          .sort((a,b) => percentColorMatch(a.color) < percentColorMatch(b.color) ? 1 : -1)
          .map(buttonColor => {
            return showButton(buttonColor.color, buttonColor.name, buttonColor.brand, buttonColor.yarnName, percentColorMatch(buttonColor.color))
          })
        }
      </div>
    </div>
  );

  function percentColorMatch(buttonColor: string){
    const labColor = lab(color);
    const labButtonColor = lab(buttonColor);

    const dL = labColor.l - labButtonColor.l;
    const da = labColor.a - labButtonColor.a;
    const db = labColor.b - labButtonColor.b;

    const match = 100 - Math.sqrt(dL * dL + da * da + db * db);

    return match;
  }

  function showButton(buttonColor: string, name: string, brand: string, yarnName: string, match: number){
    const rgb = hexToRgb(buttonColor);
    let textColor = "white";

    if(rgb.r + rgb.b + rgb.g > 550){
      textColor = "black";
    }

    return(
    <button key={brand + yarnName + name + buttonColor} type="button" className="p-4 rounded shadow-sm cursor-pointer flex-1 min-w-fit" style={{background: "linear-gradient(rgb("+ Math.min(rgb.r + 16, 255) +", " + Math.min(rgb.g + 12, 255) + ", " + Math.min(rgb.b + 14, 255) + "), rgb("+ Math.max(rgb.r - 18, 0) +", "+ Math.max(rgb.g - 12, 0) +", "+ Math.max(rgb.b - 14, 0) +"))", color: textColor}} onClick={e => {setSelectedButtonColor(buttonColor); setSelectedButtonColorName(name); setSelectedButtonColorBrand(brand); setSelectedButtonColorYarnName(yarnName); setColor(buttonColor); setColorText(buttonColor);}}>
      <div className="flex gap-2 justify-center items-center">
        {selectedButtonColor === buttonColor? 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={textColor} className="w-6 h-6"> 
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          :
          <span className='rounded-full mx-[2.5px] p-2 w-3 h-3 border-[1.5px]' style={{borderColor: textColor}}>
          </span>
        }
        <span className='font-medium'>{name + " (" + match.toFixed(1).replace(/[.,]0$/, "") + "%)"}</span>
      </div>
    </button>);
  }

  function handleColorText(e: React.ChangeEvent<HTMLInputElement>){
    const hexColor = /^#?([A-Fa-f0-9]{6})$/g
    const colorText = e.target.value;
  
    setColorText(colorText);

    if(colorText.match(hexColor)){
      if(colorText.includes("#")){
        setColor(colorText);
      }else{
        setColor("#" + colorText);
      }
    }
  }

  function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) || "#ffffff";
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    };
  }
}

export default App;
