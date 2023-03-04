/*
Unofficial yarn colorway data as of March 2, 2023

MIT License

Copyright 2023 https://www.temperature-blanket.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

For questions or comments email info@temperature-blanket.com.

Each brand object conforms to the following TypeScript interface:

interface Brand = {
  name: string; // Name of the brand
  id: string; // ID of the brand (lowercase name in snake_case)
  yarns: {
      colorways: {
          source: {
              name: string; // Name of the yarn source. Usually the URL location host name, for example website.com
              url: string; // URL of the yarn source
              accessed: string; // Most recent date the URL was accessed in 'YYYY-MM-DD' format
              unavailable?: string; // Optional date the yarn URL became unavailable in 'YYYY-MM-DD' format
          };
          colors: {
              color: string; // The colorway color value in hex format
              name: string; // Name of the colorway
              url?: string; // Optional URL of the colorway
          }[];
      }[];
      name: string; // Name of the yarn
      id: string; // ID of the the yarn (lowercase name in snake_case)
  }[];
};

The following javascript array of brand objects with yarn and colorway data was exported using JSON.stringify()
*/
import { Brand } from "./brand";

const colors: Brand[] = [
    {
      "name": "Bernat",
      "id": "bernat",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "yarnspirations.com",
                "url": "https://www.yarnspirations.com/bernat-super-value-yarn/164053.html",
                "accessed": "2022-03-17"
              },
              "colors": [
                {
                  "color": "#e0e0e7",
                  "name": "White"
                },
                {
                  "color": "#f5f4ea",
                  "name": "Winter White"
                },
                {
                  "color": "#ede6cf",
                  "name": "Natural"
                },
                {
                  "color": "#f3c5d0",
                  "name": "Baby Pink"
                },
                {
                  "color": "#e6d791",
                  "name": "Yellow"
                },
                {
                  "color": "#cbd0cc",
                  "name": "Gray Ragg"
                },
                {
                  "color": "#7f70a6",
                  "name": "Lavender"
                },
                {
                  "color": "#baa7d5",
                  "name": "Lilac"
                },
                {
                  "color": "#f95c7c",
                  "name": "Peony Pink"
                },
                {
                  "color": "#c64d79",
                  "name": "Magenta"
                },
                {
                  "color": "#b1dfc9",
                  "name": "Mint"
                },
                {
                  "color": "#63a5a9",
                  "name": "Aqua"
                },
                {
                  "color": "#abc8dd",
                  "name": "Sky"
                },
                {
                  "color": "#84d5ef",
                  "name": "Cool Blue"
                },
                {
                  "color": "#4497da",
                  "name": "Hot Blue"
                },
                {
                  "color": "#2883a9",
                  "name": "Peacock"
                },
                {
                  "color": "#2e428d",
                  "name": "Royal Blue"
                },
                {
                  "color": "#482f74",
                  "name": "Light Damson"
                },
                {
                  "color": "#beb039",
                  "name": "Grass"
                },
                {
                  "color": "#576142",
                  "name": "Forest Green"
                },
                {
                  "color": "#7fa459",
                  "name": "Lush"
                },
                {
                  "color": "#188d6c",
                  "name": "Kelly Green"
                },
                {
                  "color": "#fbaa0e",
                  "name": "Bright Yellow"
                },
                {
                  "color": "#fa5823",
                  "name": "Carrot"
                },
                {
                  "color": "#930716",
                  "name": "Cherry Red"
                },
                {
                  "color": "#982c2b",
                  "name": "Redwood Heather"
                },
                {
                  "color": "#e3101c",
                  "name": "True Red"
                },
                {
                  "color": "#cc1c2d",
                  "name": "Berry"
                },
                {
                  "color": "#d1bb99",
                  "name": "Oatmeal"
                },
                {
                  "color": "#725a4e",
                  "name": "Taupe Heather"
                },
                {
                  "color": "#c7a178",
                  "name": "Dark Heather"
                },
                {
                  "color": "#a29187",
                  "name": "Clay"
                },
                {
                  "color": "#ac815b",
                  "name": "Topaz"
                },
                {
                  "color": "#503c3b",
                  "name": "Taupe"
                },
                {
                  "color": "#957961",
                  "name": "Honey"
                },
                {
                  "color": "#491f0e",
                  "name": "Walnut"
                },
                {
                  "color": "#4d0b12",
                  "name": "Burgundy"
                },
                {
                  "color": "#656378",
                  "name": "Steel Blue Heather"
                },
                {
                  "color": "#525151",
                  "name": "True Gray"
                },
                {
                  "color": "#7c8183",
                  "name": "Soft Gray"
                },
                {
                  "color": "#393a5d",
                  "name": "Denim Heather"
                },
                {
                  "color": "#2e4953",
                  "name": "Teal Heather"
                },
                {
                  "color": "#331639",
                  "name": "Mulberry"
                },
                {
                  "color": "#2e214d",
                  "name": "Royal Purple"
                },
                {
                  "color": "#161615",
                  "name": "Black"
                },
                {
                  "color": "#1c1c28",
                  "name": "Navy"
                },
                {
                  "color": "#182b1e",
                  "name": "Deep Sea Green"
                },
                {
                  "color": "#1e1d1d",
                  "name": "Dark Gray"
                },
                {
                  "color": "#2b1a39",
                  "name": "Damson"
                },
                {
                  "color": "#311d16",
                  "name": "Chocolate"
                }
              ]
            }
          ],
          "name": "Super Value",
          "id": "super_value"
        }
      ]
    },
    {
      "name": "Berroco",
      "id": "berroco",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "berroco.com",
                "url": "https://www.berroco.com/yarns/berroco-remix-light",
                "accessed": "2023-02-08"
              },
              "colors": [
                {
                  "color": "#889ca5",
                  "name": "Elderberry"
                },
                {
                  "color": "#605e50",
                  "name": "Artichoke"
                },
                {
                  "color": "#a68473",
                  "name": "Gooseberry"
                },
                {
                  "color": "#862d22",
                  "name": "Cherry"
                },
                {
                  "color": "#21528b",
                  "name": "Blue Moon"
                },
                {
                  "color": "#24494d",
                  "name": "Irish Moss"
                },
                {
                  "color": "#b55339",
                  "name": "Apricot"
                },
                {
                  "color": "#c6bbb3",
                  "name": "Birch"
                },
                {
                  "color": "#a5948c",
                  "name": "Almond"
                },
                {
                  "color": "#5e5858",
                  "name": "Patina"
                },
                {
                  "color": "#b58ca0",
                  "name": "Rose"
                },
                {
                  "color": "#5c2734",
                  "name": "Strawberry"
                },
                {
                  "color": "#3a3e52",
                  "name": "Nightfall"
                },
                {
                  "color": "#464d68",
                  "name": "Old Jeans"
                },
                {
                  "color": "#a2a7af",
                  "name": "Mist"
                },
                {
                  "color": "#7b7a7f",
                  "name": "Smoke"
                },
                {
                  "color": "#212123",
                  "name": "Pepper"
                },
                {
                  "color": "#4f7990",
                  "name": "Pool"
                },
                {
                  "color": "#375661",
                  "name": "Ocean"
                },
                {
                  "color": "#74728e",
                  "name": "Periwinkle"
                },
                {
                  "color": "#433e55",
                  "name": "Eggplant"
                },
                {
                  "color": "#894d61",
                  "name": "Peony"
                },
                {
                  "color": "#a0ab85",
                  "name": "Leaf"
                },
                {
                  "color": "#91966a",
                  "name": "Fern"
                },
                {
                  "color": "#a2845c",
                  "name": "Buttercup"
                }
              ]
            }
          ],
          "name": "Remix Light",
          "id": "remix_light"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "berroco.com",
                "url": "https://www.berroco.com/yarns/berroco-ultra-wool",
                "accessed": "2023-02-13"
              },
              "colors": [
                {
                  "color": "#e8cea5",
                  "name": "Daffodil"
                },
                {
                  "color": "#b0ccca",
                  "name": "Mint"
                },
                {
                  "color": "#8ea59a",
                  "name": "Matcha"
                },
                {
                  "color": "#868fbe",
                  "name": "Forget-me-not"
                },
                {
                  "color": "#816ea5",
                  "name": "Wisteria"
                },
                {
                  "color": "#cd83b9",
                  "name": "Pink Lady"
                },
                {
                  "color": "#d499ae",
                  "name": "Peach"
                },
                {
                  "color": "#afcfdd",
                  "name": "Breeze"
                },
                {
                  "color": "#d0cec6",
                  "name": "Snow"
                },
                {
                  "color": "#676668",
                  "name": "Smoke"
                },
                {
                  "color": "#b4b2ae",
                  "name": "Frost"
                },
                {
                  "color": "#6c7174",
                  "name": "Fog"
                },
                {
                  "color": "#40403a",
                  "name": "Granite"
                },
                {
                  "color": "#1e1e20",
                  "name": "Black Pepper"
                },
                {
                  "color": "#161617",
                  "name": "Cast Iron"
                },
                {
                  "color": "#211717",
                  "name": "Beet Root"
                },
                {
                  "color": "#31151b",
                  "name": "Currant"
                },
                {
                  "color": "#31181a",
                  "name": "Sour Cherry"
                },
                {
                  "color": "#57191e",
                  "name": "Juliet"
                },
                {
                  "color": "#491818",
                  "name": "Brandy Wine"
                },
                {
                  "color": "#6c1520",
                  "name": "Chili"
                },
                {
                  "color": "#cdc4bb",
                  "name": "Cream"
                },
                {
                  "color": "#9a8f80",
                  "name": "Oat"
                },
                {
                  "color": "#776a5e",
                  "name": "Wheat"
                },
                {
                  "color": "#554e48",
                  "name": "Driftwood"
                },
                {
                  "color": "#42433b",
                  "name": "Bark"
                },
                {
                  "color": "#1e1a1a",
                  "name": "Bear"
                },
                {
                  "color": "#8a7261",
                  "name": "Chick Pea"
                },
                {
                  "color": "#483428",
                  "name": "Mocha"
                },
                {
                  "color": "#3b211a",
                  "name": "Fox"
                },
                {
                  "color": "#611d19",
                  "name": "Kabocha"
                },
                {
                  "color": "#60221e",
                  "name": "Sunflower"
                },
                {
                  "color": "#a63524",
                  "name": "Nasturtium"
                },
                {
                  "color": "#a85633",
                  "name": "Bittersweet"
                },
                {
                  "color": "#c9af6f",
                  "name": "Butter"
                },
                {
                  "color": "#b2935b",
                  "name": "Delicata"
                },
                {
                  "color": "#8f6531",
                  "name": "Butternut"
                },
                {
                  "color": "#6f5c37",
                  "name": "Kohlrabi"
                },
                {
                  "color": "#554e30",
                  "name": "Lentil"
                },
                {
                  "color": "#3c3d32",
                  "name": "Marjoram"
                },
                {
                  "color": "#39472d",
                  "name": "Basil"
                },
                {
                  "color": "#225237",
                  "name": "Holly"
                },
                {
                  "color": "#24362d",
                  "name": "Arbor"
                },
                {
                  "color": "#1f2a26",
                  "name": "Pine"
                },
                {
                  "color": "#303733",
                  "name": "Rosemary"
                },
                {
                  "color": "#4a665e",
                  "name": "Sage"
                },
                {
                  "color": "#697d76",
                  "name": "Thyme"
                },
                {
                  "color": "#525953",
                  "name": "Spruce"
                },
                {
                  "color": "#646872",
                  "name": "Stonewashed"
                },
                {
                  "color": "#273147",
                  "name": "Delphinium"
                },
                {
                  "color": "#212538",
                  "name": "Denim"
                },
                {
                  "color": "#343646",
                  "name": "Maritime"
                },
                {
                  "color": "#8ba2c8",
                  "name": "Sky Blue"
                },
                {
                  "color": "#b4bbc3",
                  "name": "Blue Angel"
                },
                {
                  "color": "#1d2229",
                  "name": "Navy"
                },
                {
                  "color": "#21434c",
                  "name": "Kale"
                },
                {
                  "color": "#325f66",
                  "name": "Verbena"
                },
                {
                  "color": "#2d686a",
                  "name": "Chervil"
                },
                {
                  "color": "#6b999b",
                  "name": "Aqua"
                },
                {
                  "color": "#388ba6",
                  "name": "Morning Glory"
                },
                {
                  "color": "#28799f",
                  "name": "Blue Jay"
                },
                {
                  "color": "#1a2439",
                  "name": "Ocean"
                },
                {
                  "color": "#053753",
                  "name": "Lake"
                },
                {
                  "color": "#315d83",
                  "name": "River"
                },
                {
                  "color": "#17347b",
                  "name": "Blueberry"
                },
                {
                  "color": "#0f154e",
                  "name": "Cobalt"
                },
                {
                  "color": "#585f99",
                  "name": "Periwinkle"
                },
                {
                  "color": "#31325e",
                  "name": "Ultra Violet"
                },
                {
                  "color": "#42425a",
                  "name": "Columbine"
                },
                {
                  "color": "#7f818d",
                  "name": "Dove"
                },
                {
                  "color": "#807087",
                  "name": "Lilac"
                },
                {
                  "color": "#6b5e6e",
                  "name": "Iris"
                },
                {
                  "color": "#553f95",
                  "name": "Lupine"
                },
                {
                  "color": "#51456e",
                  "name": "Aster"
                },
                {
                  "color": "#453d56",
                  "name": "Lavender"
                },
                {
                  "color": "#2c2435",
                  "name": "Fig"
                },
                {
                  "color": "#2c1e26",
                  "name": "Hollyhock"
                },
                {
                  "color": "#5e2845",
                  "name": "Cherry"
                },
                {
                  "color": "#573c4a",
                  "name": "Heather"
                },
                {
                  "color": "#72275e",
                  "name": "Magnolia"
                },
                {
                  "color": "#be96ac",
                  "name": "Rose"
                },
                {
                  "color": "#92355a",
                  "name": "Hibiscus"
                },
                {
                  "color": "#7c3047",
                  "name": "Peony"
                },
                {
                  "color": "#c3aaae",
                  "name": "Alyssum"
                }
              ]
            }
          ],
          "name": "Ultra Wool",
          "id": "ultra_wool"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "berroco.com",
                "url": "https://www.berroco.com/yarns/berroco-ultra-wool-dk",
                "accessed": "2023-02-13"
              },
              "colors": [
                {
                  "color": "#d4d2d3",
                  "name": "Snow"
                },
                {
                  "color": "#b1ada3",
                  "name": "Frost"
                },
                {
                  "color": "#90949b",
                  "name": "Fog"
                },
                {
                  "color": "#3b3c3c",
                  "name": "Black Pepper"
                },
                {
                  "color": "#2b2b2d",
                  "name": "Cast Iron"
                },
                {
                  "color": "#611e20",
                  "name": "Sour Cherry"
                },
                {
                  "color": "#872327",
                  "name": "Juliet"
                },
                {
                  "color": "#8e1518",
                  "name": "Chili"
                },
                {
                  "color": "#a7483b",
                  "name": "Sunflower"
                },
                {
                  "color": "#c18a40",
                  "name": "Butternut"
                },
                {
                  "color": "#5c5e47",
                  "name": "Marjoram"
                },
                {
                  "color": "#3c5145",
                  "name": "Rosemary"
                },
                {
                  "color": "#2d4d41",
                  "name": "Pine"
                },
                {
                  "color": "#e1dace",
                  "name": "Cream"
                },
                {
                  "color": "#a68f75",
                  "name": "Wheat"
                },
                {
                  "color": "#786b59",
                  "name": "Driftwood"
                },
                {
                  "color": "#2d2725",
                  "name": "Bear"
                },
                {
                  "color": "#70727b",
                  "name": "Stonewashed"
                },
                {
                  "color": "#31374c",
                  "name": "Denim"
                },
                {
                  "color": "#313753",
                  "name": "Maritime"
                },
                {
                  "color": "#8a9ec9",
                  "name": "Sky Blue"
                },
                {
                  "color": "#b9c0d5",
                  "name": "Blue Angel"
                },
                {
                  "color": "#2a3b51",
                  "name": "Navy"
                },
                {
                  "color": "#223850",
                  "name": "Ocean"
                },
                {
                  "color": "#085163",
                  "name": "Kale"
                },
                {
                  "color": "#085c61",
                  "name": "Verbena"
                },
                {
                  "color": "#ead3b3",
                  "name": "Daffodil"
                },
                {
                  "color": "#bbd2d1",
                  "name": "Mint"
                },
                {
                  "color": "#94c8cf",
                  "name": "Breeze"
                },
                {
                  "color": "#9399bf",
                  "name": "Forget-me-not"
                },
                {
                  "color": "#a8a8c0",
                  "name": "Dove"
                },
                {
                  "color": "#5a619b",
                  "name": "Periwinkle"
                },
                {
                  "color": "#3c3c68",
                  "name": "Ultra Violet"
                },
                {
                  "color": "#534868",
                  "name": "Lavender"
                },
                {
                  "color": "#8065a4",
                  "name": "Aster"
                },
                {
                  "color": "#da99c8",
                  "name": "Pink Lady"
                },
                {
                  "color": "#9d3e87",
                  "name": "Magnolia"
                },
                {
                  "color": "#885771",
                  "name": "Heather"
                },
                {
                  "color": "#d05477",
                  "name": "Hibiscus"
                },
                {
                  "color": "#f0d1d5",
                  "name": "Alyssum"
                }
              ]
            }
          ],
          "name": "Ultra Wool DK",
          "id": "ultra_wool_dk"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "berroco.com",
                "url": "https://www.berroco.com/yarns/vintage",
                "accessed": "2023-02-08"
              },
              "colors": [
                {
                  "color": "#cd7b37",
                  "name": "Marmalade"
                },
                {
                  "color": "#e48083",
                  "name": "Guava"
                },
                {
                  "color": "#c0465b",
                  "name": "Rhubarb"
                },
                {
                  "color": "#7b826f",
                  "name": "Okra"
                },
                {
                  "color": "#316b70",
                  "name": "Jalapeno"
                },
                {
                  "color": "#76c3e0",
                  "name": "Cotton Candy"
                },
                {
                  "color": "#30496b",
                  "name": "Acai"
                },
                {
                  "color": "#e8ddd4",
                  "name": "Mochi"
                },
                {
                  "color": "#cbaf98",
                  "name": "Mushroom"
                },
                {
                  "color": "#d5bfae",
                  "name": "Rye"
                },
                {
                  "color": "#a18880",
                  "name": "Oats"
                },
                {
                  "color": "#463429",
                  "name": "Mocha"
                },
                {
                  "color": "#402918",
                  "name": "Chocolate"
                },
                {
                  "color": "#6b5225",
                  "name": "Chana Dal"
                },
                {
                  "color": "#855c31",
                  "name": "Cork"
                },
                {
                  "color": "#b08840",
                  "name": "Butternut"
                },
                {
                  "color": "#c2684d",
                  "name": "Grapefruit"
                },
                {
                  "color": "#a03d16",
                  "name": "Tang"
                },
                {
                  "color": "#913b20",
                  "name": "Pumpkin"
                },
                {
                  "color": "#812a24",
                  "name": "Red Pepper"
                },
                {
                  "color": "#6a0b19",
                  "name": "Sour Cherry"
                },
                {
                  "color": "#441017",
                  "name": "Black Cherry"
                },
                {
                  "color": "#768177",
                  "name": "Sage"
                },
                {
                  "color": "#7e9b9d",
                  "name": "Bird's Egg"
                },
                {
                  "color": "#6c8b8e",
                  "name": "Calico"
                },
                {
                  "color": "#68918f",
                  "name": "Gingham"
                },
                {
                  "color": "#37686c",
                  "name": "Breezeway"
                },
                {
                  "color": "#205c6e",
                  "name": "Neptune"
                },
                {
                  "color": "#1f5459",
                  "name": "Caribbean Sea"
                },
                {
                  "color": "#06232e",
                  "name": "Tide Pool"
                },
                {
                  "color": "#2c5b6c",
                  "name": "Cerulean"
                },
                {
                  "color": "#4278aa",
                  "name": "Forget-me-not"
                },
                {
                  "color": "#16357a",
                  "name": "Blue Moon"
                },
                {
                  "color": "#7a93b9",
                  "name": "Sapphire"
                },
                {
                  "color": "#314865",
                  "name": "Azure"
                },
                {
                  "color": "#536982",
                  "name": "Twilight"
                },
                {
                  "color": "#75797d",
                  "name": "Overcast"
                },
                {
                  "color": "#cdbdb6",
                  "name": "Stone"
                },
                {
                  "color": "#c1b5b0",
                  "name": "Dove"
                },
                {
                  "color": "#5f5f62",
                  "name": "Storm"
                },
                {
                  "color": "#aca3a5",
                  "name": "Smoke"
                },
                {
                  "color": "#3e3c3f",
                  "name": "Cracked Pepper"
                },
                {
                  "color": "#1d1d1f",
                  "name": "Charcoal"
                },
                {
                  "color": "#101011",
                  "name": "Cast Iron"
                },
                {
                  "color": "#4f2a38",
                  "name": "Black Currant"
                },
                {
                  "color": "#7d1116",
                  "name": "Berries"
                },
                {
                  "color": "#62101f",
                  "name": "Ruby"
                },
                {
                  "color": "#8c061f",
                  "name": "Cardinal"
                },
                {
                  "color": "#1f323f",
                  "name": "Indigo"
                },
                {
                  "color": "#0f1323",
                  "name": "Dark Denim"
                },
                {
                  "color": "#262a4a",
                  "name": "Dungaree"
                },
                {
                  "color": "#222d51",
                  "name": "Lapis"
                },
                {
                  "color": "#223f42",
                  "name": "Verde"
                },
                {
                  "color": "#0e3f26",
                  "name": "Mistletoe"
                },
                {
                  "color": "#495241",
                  "name": "Spruce"
                },
                {
                  "color": "#252e1e",
                  "name": "Douglas Fir"
                },
                {
                  "color": "#605e2d",
                  "name": "Fennel"
                },
                {
                  "color": "#ca87ad",
                  "name": "Blush"
                },
                {
                  "color": "#7c467e",
                  "name": "Fuchsia"
                },
                {
                  "color": "#6d1957",
                  "name": "Dewberry"
                },
                {
                  "color": "#633a49",
                  "name": "Begonia"
                },
                {
                  "color": "#30182c",
                  "name": "Dried Plum"
                },
                {
                  "color": "#736890",
                  "name": "Iris"
                },
                {
                  "color": "#79709d",
                  "name": "Violet"
                },
                {
                  "color": "#634a6c",
                  "name": "Lilacs"
                },
                {
                  "color": "#463c53",
                  "name": "Petunia"
                },
                {
                  "color": "#40384b",
                  "name": "Aubergine"
                },
                {
                  "color": "#ce6d2a",
                  "name": "Tangerine"
                },
                {
                  "color": "#cc3019",
                  "name": "Orange"
                },
                {
                  "color": "#d59f41",
                  "name": "Sunny"
                },
                {
                  "color": "#c39b2e",
                  "name": "Citrus"
                },
                {
                  "color": "#9a963d",
                  "name": "Grapes"
                },
                {
                  "color": "#71853b",
                  "name": "Envy"
                },
                {
                  "color": "#5ca9aa",
                  "name": "Electric"
                },
                {
                  "color": "#1172a1",
                  "name": "Horizon Blue"
                },
                {
                  "color": "#bb3d80",
                  "name": "Shocking"
                },
                {
                  "color": "#7d2e7f",
                  "name": "Aurora"
                },
                {
                  "color": "#1c5ebc",
                  "name": "Blue Note"
                },
                {
                  "color": "#262c8f",
                  "name": "Wild Blueberry"
                },
                {
                  "color": "#055e34",
                  "name": "Holly"
                },
                {
                  "color": "#eadfd3",
                  "name": "Snow Day"
                },
                {
                  "color": "#e6d5bc",
                  "name": "Buttercream"
                },
                {
                  "color": "#e0c383",
                  "name": "Banane"
                },
                {
                  "color": "#c64f4d",
                  "name": "Watermelon"
                },
                {
                  "color": "#b5574f",
                  "name": "Macaron"
                },
                {
                  "color": "#a6b875",
                  "name": "Kiwi"
                },
                {
                  "color": "#b7d2c5",
                  "name": "Minty"
                },
                {
                  "color": "#5fa0a6",
                  "name": "Aquae"
                },
                {
                  "color": "#5f84a6",
                  "name": "Sky Blue"
                },
                {
                  "color": "#b8c1d5",
                  "name": "Misty"
                },
                {
                  "color": "#e1c4c6",
                  "name": "Fondant"
                },
                {
                  "color": "#9f7e88",
                  "name": "Rose Quartz"
                },
                {
                  "color": "#af829a",
                  "name": "Ballet Slipper"
                },
                {
                  "color": "#997988",
                  "name": "Petals"
                },
                {
                  "color": "#b29ec7",
                  "name": "Aster"
                }
              ]
            }
          ],
          "name": "Vintage",
          "id": "vintage"
        }
      ]
    },
    {
      "name": "Big Twist",
      "id": "big_twist",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "joann.com",
                "url": "https://www.joann.com/big-twist-soft-yarn/zprd_16801086a.html",
                "accessed": "2022-03-12"
              },
              "colors": [
                {
                  "color": "#e4e5e0",
                  "name": "White",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801086.html"
                },
                {
                  "color": "#c2949c",
                  "name": "Blush",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801102.html"
                },
                {
                  "color": "#b26b79",
                  "name": "Rose",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801250.html"
                },
                {
                  "color": "#54192e",
                  "name": "Cranberry",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801169.html"
                },
                {
                  "color": "#cb041f",
                  "name": "Red",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801177.html"
                },
                {
                  "color": "#d33f16",
                  "name": "Orange",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801151.html"
                },
                {
                  "color": "#dea92f",
                  "name": "Yellow",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801219.html"
                },
                {
                  "color": "#c26d0e",
                  "name": "Gold",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801227.html"
                },
                {
                  "color": "#628d34",
                  "name": "Avocado",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801110.html"
                },
                {
                  "color": "#01a797",
                  "name": "Teal",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801144.html"
                },
                {
                  "color": "#2d5e7e",
                  "name": "Denim",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801136.html"
                },
                {
                  "color": "#6b594e",
                  "name": "Taupe",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801201.html"
                },
                {
                  "color": "#341f5b",
                  "name": "Purple",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801128.html"
                },
                {
                  "color": "#785771",
                  "name": "Violet",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801185.html"
                },
                {
                  "color": "#c8b28a",
                  "name": "Cream",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801193.html"
                },
                {
                  "color": "#858777",
                  "name": "Light Gray",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801235.html"
                },
                {
                  "color": "#6d716e",
                  "name": "Charcoal",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801243.html"
                },
                {
                  "color": "#191919",
                  "name": "Black",
                  "url": "https://www.joann.com/big-twist-soft-yarn/16801094.html"
                }
              ]
            }
          ],
          "name": "Big Twist Soft",
          "id": "big_twist_soft"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "joann.com",
                "url": "https://www.joann.com/big-twist-value-worsted-yarn/16800518.html",
                "accessed": "2023-01-04"
              },
              "colors": [
                {
                  "color": "#e6e6e2",
                  "name": "White"
                },
                {
                  "color": "#e3e3db",
                  "name": "Ivory"
                },
                {
                  "color": "#c4b497",
                  "name": "Cream"
                },
                {
                  "color": "#e5c1d3",
                  "name": "Light Rose"
                },
                {
                  "color": "#452d23",
                  "name": "Chocolate Brown"
                },
                {
                  "color": "#ce6962",
                  "name": "Dark Coral"
                },
                {
                  "color": "#77455d",
                  "name": "Eggplant"
                },
                {
                  "color": "#e93b86",
                  "name": "Hot Pink"
                },
                {
                  "color": "#aa2b66",
                  "name": "Magenta"
                },
                {
                  "color": "#d78dab",
                  "name": "Medium Rose"
                },
                {
                  "color": "#3f2332",
                  "name": "Burgundy"
                },
                {
                  "color": "#951c1f",
                  "name": "Deep Red"
                },
                {
                  "color": "#8b3a27",
                  "name": "Rust"
                },
                {
                  "color": "#be2029",
                  "name": "Varsity Red"
                },
                {
                  "color": "#5c1d25",
                  "name": "Wine"
                },
                {
                  "color": "#c27d86",
                  "name": "Cosmetic Pink"
                },
                {
                  "color": "#da4b2d",
                  "name": "Orange"
                },
                {
                  "color": "#f57e20",
                  "name": "Varsity Orange"
                },
                {
                  "color": "#eadb87",
                  "name": "Pale Yellow"
                },
                {
                  "color": "#e8cc36",
                  "name": "Varsity Yellow"
                },
                {
                  "color": "#c27a25",
                  "name": "Mustard"
                },
                {
                  "color": "#fab431",
                  "name": "Varsity Gold"
                },
                {
                  "color": "#426630",
                  "name": "Forest Green"
                },
                {
                  "color": "#6f883d",
                  "name": "Light Green"
                },
                {
                  "color": "#1d582f",
                  "name": "Varsity Green"
                },
                {
                  "color": "#305052",
                  "name": "Dark Teal"
                },
                {
                  "color": "#089c7f",
                  "name": "Jade Green"
                },
                {
                  "color": "#779784",
                  "name": "Sage"
                },
                {
                  "color": "#039492",
                  "name": "Teal"
                },
                {
                  "color": "#81b9bd",
                  "name": "Aqua"
                },
                {
                  "color": "#96c8eb",
                  "name": "Cornflower Blue"
                },
                {
                  "color": "#b5d0ea",
                  "name": "Sky Blue"
                },
                {
                  "color": "#7699c1",
                  "name": "Cerulean Blue"
                },
                {
                  "color": "#6d7ea4",
                  "name": "Denim Blue"
                },
                {
                  "color": "#04739a",
                  "name": "Sapphire"
                },
                {
                  "color": "#2c3d9d",
                  "name": "Varsity Blue"
                },
                {
                  "color": "#19213d",
                  "name": "Varsity Navy Blue"
                },
                {
                  "color": "#a48bc0",
                  "name": "Lilac"
                },
                {
                  "color": "#c6b4d2",
                  "name": "Soft Purple"
                },
                {
                  "color": "#402458",
                  "name": "Grape"
                },
                {
                  "color": "#92204f",
                  "name": "Plum"
                },
                {
                  "color": "#5e2266",
                  "name": "Purple"
                },
                {
                  "color": "#bbb09f",
                  "name": "Khaki"
                },
                {
                  "color": "#5f5048",
                  "name": "Taupe"
                },
                {
                  "color": "#977046",
                  "name": "Camel"
                },
                {
                  "color": "#5f5b41",
                  "name": "Olive Drab"
                },
                {
                  "color": "#774536",
                  "name": "Toffee"
                },
                {
                  "color": "#ea6e83",
                  "name": "Watermelon"
                },
                {
                  "color": "#737078",
                  "name": "Medium Gray"
                },
                {
                  "color": "#aeaba6",
                  "name": "Soft Grey"
                },
                {
                  "color": "#6d7070",
                  "name": "Titanium"
                },
                {
                  "color": "#1b1b1c",
                  "name": "Black"
                }
              ]
            }
          ],
          "name": "Value",
          "id": "value"
        }
      ]
    },
    {
      "name": "Caron",
      "id": "caron",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "yarnspirations.com",
                "url": "https://www.yarnspirations.com/caron-one-pound-yarn/294010.html",
                "accessed": "2022-03-18"
              },
              "colors": [
                {
                  "color": "#f4f3fa",
                  "name": "White"
                },
                {
                  "color": "#d1e2e5",
                  "name": "Pale Green"
                },
                {
                  "color": "#869daf",
                  "name": "Azure"
                },
                {
                  "color": "#f2e3c4",
                  "name": "Cream"
                },
                {
                  "color": "#d3c9ea",
                  "name": "Lilac"
                },
                {
                  "color": "#80cdce",
                  "name": "Robin's Egg"
                },
                {
                  "color": "#a3cdd7",
                  "name": "Soft Sage"
                },
                {
                  "color": "#5eb4d8",
                  "name": "Blue Grotto"
                },
                {
                  "color": "#fcc6ab",
                  "name": "Peach"
                },
                {
                  "color": "#c1d7ef",
                  "name": "Sky blue"
                },
                {
                  "color": "#e0d4c9",
                  "name": "Off White"
                },
                {
                  "color": "#b6b6bd",
                  "name": "Soft Gray Mix"
                },
                {
                  "color": "#fcd6e7",
                  "name": "Soft Pink"
                },
                {
                  "color": "#ea587b",
                  "name": "Rose"
                },
                {
                  "color": "#ef3f79",
                  "name": "Dark Pink"
                },
                {
                  "color": "#bd9f83",
                  "name": "Lace"
                },
                {
                  "color": "#a48e75",
                  "name": "Taupe"
                },
                {
                  "color": "#f0ab23",
                  "name": "Sunflower"
                },
                {
                  "color": "#f11627",
                  "name": "Scarlet"
                },
                {
                  "color": "#d66653",
                  "name": "Light Terracotta"
                },
                {
                  "color": "#831b2d",
                  "name": "Country Rose"
                },
                {
                  "color": "#8c121d",
                  "name": "Claret"
                },
                {
                  "color": "#7da65c",
                  "name": "Grass Green"
                },
                {
                  "color": "#0c5a36",
                  "name": "Kelly Green"
                },
                {
                  "color": "#938ccb",
                  "name": "Lavender Blue"
                },
                {
                  "color": "#6d76ae",
                  "name": "Light Violet"
                },
                {
                  "color": "#4da4b0",
                  "name": "Aqua"
                },
                {
                  "color": "#2f45a6",
                  "name": "Royalty"
                },
                {
                  "color": "#254d75",
                  "name": "Ocean"
                },
                {
                  "color": "#3b465f",
                  "name": "Cape Cod Blue"
                },
                {
                  "color": "#181c44",
                  "name": "Midnight Blue"
                },
                {
                  "color": "#1c1c1c",
                  "name": "Black"
                },
                {
                  "color": "#391739",
                  "name": "Deep Violet"
                },
                {
                  "color": "#311a14",
                  "name": "Espresso"
                },
                {
                  "color": "#646465",
                  "name": "Medium Gray Mix"
                },
                {
                  "color": "#9c3f77",
                  "name": "Purple"
                },
                {
                  "color": "#626182",
                  "name": "Denim"
                },
                {
                  "color": "#4e6879",
                  "name": "Canal"
                },
                {
                  "color": "#a88792",
                  "name": "Fig"
                },
                {
                  "color": "#262626",
                  "name": "Dark Gray Mix"
                },
                {
                  "color": "#456164",
                  "name": "Hosta"
                }
              ]
            }
          ],
          "name": "One Pound",
          "id": "one_pound"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "joann.com",
                "url": "https://www.joann.com/caron-simply-soft-yarn/prd23209.html",
                "accessed": "2022-03-07"
              },
              "colors": [
                {
                  "color": "#F2F2F2",
                  "name": "White",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5408000.html"
                },
                {
                  "color": "#F6EFDC",
                  "name": "Off White",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5408034.html"
                },
                {
                  "color": "#BF9CAF",
                  "name": "Blackberry",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/10105179.html"
                },
                {
                  "color": "#BDB3CF",
                  "name": "Orchid",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5408323.html"
                },
                {
                  "color": "#EDCDC6",
                  "name": "Soft Pink",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5408125.html"
                },
                {
                  "color": "#C79E97",
                  "name": "Victorian Rose",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5413760.html"
                },
                {
                  "color": "#982E4B",
                  "name": "Fuchsia",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/12864633.html"
                },
                {
                  "color": "#E84790",
                  "name": "Neon Pink",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/12864716.html"
                },
                {
                  "color": "#D098A3",
                  "name": "Plum Wine",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5408141.html"
                },
                {
                  "color": "#90241D",
                  "name": "Autumn Red",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/7741283.html"
                },
                {
                  "color": "#561C2F",
                  "name": "Burgundy",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/12733341.html"
                },
                {
                  "color": "#BA2B26",
                  "name": "Harvest Red",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/12664504.html"
                },
                {
                  "color": "#BF5C4F",
                  "name": "Persimmon",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/10617678.html"
                },
                {
                  "color": "#D53230",
                  "name": "Red",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5408182.html"
                },
                {
                  "color": "#96B1C4",
                  "name": "Light Country Blue",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5413984.html"
                },
                {
                  "color": "#EB7F41",
                  "name": "Neon Orange",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/12864708.html"
                },
                {
                  "color": "#DA663F",
                  "name": "Pumpkin",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/12664496.html"
                },
                {
                  "color": "#E49093",
                  "name": "Strawberry",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/10821767.html"
                },
                {
                  "color": "#d4a956",
                  "name": "Sunshine",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/10617686.html"
                },
                {
                  "color": "#9290C2",
                  "name": "Lavender Blue",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/10617694.html"
                },
                {
                  "color": "#D2B57D",
                  "name": "Autumn Maize",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/10105153.html"
                },
                {
                  "color": "#E2AC46",
                  "name": "Gold",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/15585458.html"
                },
                {
                  "color": "#EAD568",
                  "name": "Lemonade",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/12864724.html"
                },
                {
                  "color": "#C0C967",
                  "name": "Chartreuse",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/12864674.html"
                },
                {
                  "color": "#ABB77B",
                  "name": "Pistachio",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/10105161.html"
                },
                {
                  "color": "#83A988",
                  "name": "Sage",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5408117.html"
                },
                {
                  "color": "#A6C4B7",
                  "name": "Soft Green",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5761234.html"
                },
                {
                  "color": "#8CA087",
                  "name": "Woodland Heather",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/15015928.html"
                },
                {
                  "color": "#364730",
                  "name": "Dark Sage",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5408190.html"
                },
                {
                  "color": "#4DA37E",
                  "name": "Kelly Green",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/12864666.html"
                },
                {
                  "color": "#2A5771",
                  "name": "Pagoda",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/10105203.html"
                },
                {
                  "color": "#647697",
                  "name": "Country Blue",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5408091.html"
                },
                {
                  "color": "#EED8C5",
                  "name": "Light Country Peach",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5408265.html"
                },
                {
                  "color": "#92C6C7",
                  "name": "Robins Egg",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/13554571.html"
                },
                {
                  "color": "#C9D9E7",
                  "name": "Soft Blue",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5408083.html"
                },
                {
                  "color": "#2C314E",
                  "name": "Dark Country Blue",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5408158.html"
                },
                {
                  "color": "#33567A",
                  "name": "Ocean",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/10617892.html"
                },
                {
                  "color": "#4166BB",
                  "name": "Royal Blue",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/12664488.html"
                },
                {
                  "color": "#5636B6",
                  "name": "Iris",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/9857673.html"
                },
                {
                  "color": "#44283D",
                  "name": "Plum Perfect",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/15585441.html"
                },
                {
                  "color": "#3F2B5F",
                  "name": "Purple",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/13554563.html"
                },
                {
                  "color": "#DBCEB2",
                  "name": "Bone",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5408059.html"
                },
                {
                  "color": "#52261A",
                  "name": "Chocolate",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/1542224.html"
                },
                {
                  "color": "#664C45",
                  "name": "Taupe",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/15585466.html"
                },
                {
                  "color": "#3D3C3C",
                  "name": "Charcoal Heather",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/12436713.html"
                },
                {
                  "color": "#A3A3A3",
                  "name": "Feather Gray",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/17349226.html"
                },
                {
                  "color": "#909194",
                  "name": "Soft Gray Heather",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/6206171.html"
                },
                {
                  "color": "#12110F",
                  "name": "Black",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/5408216.html"
                },
                {
                  "color": "#EDE4B4",
                  "name": "Baby Sunshine",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/15757909.html"
                },
                {
                  "color": "#509AD1",
                  "name": "Cobalt Blue",
                  "url": "https://www.joann.com/caron-simply-soft-yarn/13922109.html"
                }
              ]
            }
          ],
          "name": "Simply Soft Solids",
          "id": "simply_soft_solids"
        }
      ]
    },
    {
      "name": "Cascade",
      "id": "cascade",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "cascade.com",
                "url": "https://www.cascadeyarns.com/product/aegean-tweed",
                "accessed": "2023-02-08"
              },
              "colors": [
                {
                  "color": "#947731",
                  "name": "Gold"
                },
                {
                  "color": "#763c22",
                  "name": "Burnt Orange"
                },
                {
                  "color": "#5a3930",
                  "name": "Ginger"
                },
                {
                  "color": "#45272f",
                  "name": "Burgundy"
                },
                {
                  "color": "#5b2129",
                  "name": "Scarlet"
                },
                {
                  "color": "#27282a",
                  "name": "Raven"
                },
                {
                  "color": "#444a47",
                  "name": "Shadow"
                },
                {
                  "color": "#70756d",
                  "name": "Silver"
                },
                {
                  "color": "#89878b",
                  "name": "Cloudy Day"
                },
                {
                  "color": "#424649",
                  "name": "Jet"
                },
                {
                  "color": "#8e3460",
                  "name": "Fuchsia"
                },
                {
                  "color": "#9b5b62",
                  "name": "Salmon Rose"
                },
                {
                  "color": "#7d7180",
                  "name": "Lilac"
                },
                {
                  "color": "#302642",
                  "name": "Blackberry"
                },
                {
                  "color": "#38425a",
                  "name": "Marine"
                },
                {
                  "color": "#3d414c",
                  "name": "Dark Sapphire"
                },
                {
                  "color": "#565f6d",
                  "name": "Denim"
                },
                {
                  "color": "#3b548a",
                  "name": "Deep Water"
                },
                {
                  "color": "#27727f",
                  "name": "Pacific Blue"
                },
                {
                  "color": "#2d4c5e",
                  "name": "Deep Teal"
                },
                {
                  "color": "#584a50",
                  "name": "Mocha"
                },
                {
                  "color": "#877471",
                  "name": "Nougat"
                },
                {
                  "color": "#9e9d86",
                  "name": "Cream"
                },
                {
                  "color": "#685948",
                  "name": "Tannin"
                },
                {
                  "color": "#352e27",
                  "name": "Coffee Bean"
                },
                {
                  "color": "#6d684d",
                  "name": "Olive"
                },
                {
                  "color": "#545a35",
                  "name": "Pesto"
                }
              ]
            }
          ],
          "name": "Aegean Tweed",
          "id": "aegean_tweed"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "cascade.com",
                "url": "https://www.cascadeyarns.com/product/anchor-bay",
                "accessed": "2023-01-03"
              },
              "colors": [
                {
                  "color": "#82728a",
                  "name": "Pastel Lilac"
                },
                {
                  "color": "#271b52",
                  "name": "Deep Violet"
                },
                {
                  "color": "#7968ab",
                  "name": "Deep Lavender"
                },
                {
                  "color": "#3c294d",
                  "name": "Prism Violet"
                },
                {
                  "color": "#351539",
                  "name": "Dark Purple"
                },
                {
                  "color": "#805687",
                  "name": "Dusty Lavender"
                },
                {
                  "color": "#8f657c",
                  "name": "Pink"
                },
                {
                  "color": "#a84985",
                  "name": "Ibis Rose"
                },
                {
                  "color": "#ae5767",
                  "name": "Desert Rose"
                },
                {
                  "color": "#c78188",
                  "name": "Soft Rose"
                },
                {
                  "color": "#a69f96",
                  "name": "White"
                },
                {
                  "color": "#898485",
                  "name": "Moonbeam"
                },
                {
                  "color": "#87878b",
                  "name": "Silver"
                },
                {
                  "color": "#505258",
                  "name": "Titanium"
                },
                {
                  "color": "#28292a",
                  "name": "Dark Shadow"
                },
                {
                  "color": "#0e1216",
                  "name": "Black"
                },
                {
                  "color": "#6f0d1e",
                  "name": "Scarlet"
                },
                {
                  "color": "#ab3f4d",
                  "name": "Chrysanthemum"
                },
                {
                  "color": "#679a8d",
                  "name": "Aqua"
                },
                {
                  "color": "#82bbb6",
                  "name": "Aqua Glass"
                },
                {
                  "color": "#3b5c5e",
                  "name": "Dusky Aqua"
                },
                {
                  "color": "#0a5765",
                  "name": "Dark Teal"
                },
                {
                  "color": "#74a1ae",
                  "name": "Dusky Teal"
                },
                {
                  "color": "#255d69",
                  "name": "Storm Blue"
                },
                {
                  "color": "#6d8c99",
                  "name": "Stratosphere"
                },
                {
                  "color": "#405b6e",
                  "name": "Denim"
                },
                {
                  "color": "#68829b",
                  "name": "Blue Bell"
                },
                {
                  "color": "#2f5787",
                  "name": "Deep Blue"
                },
                {
                  "color": "#0f1931",
                  "name": "Navy"
                },
                {
                  "color": "#262367",
                  "name": "Royal Blue"
                },
                {
                  "color": "#4c589b",
                  "name": "Blueberry Pie"
                },
                {
                  "color": "#e36a60",
                  "name": "Coral"
                },
                {
                  "color": "#cc9c41",
                  "name": "Daffodil"
                },
                {
                  "color": "#b29c68",
                  "name": "Soft Yellow"
                },
                {
                  "color": "#74a16a",
                  "name": "Meadow"
                },
                {
                  "color": "#395d3d",
                  "name": "Dark Green"
                },
                {
                  "color": "#2a4736",
                  "name": "Hunter Green"
                },
                {
                  "color": "#4a5c4d",
                  "name": "Mineral Green"
                },
                {
                  "color": "#86957b",
                  "name": "Misty Jade"
                },
                {
                  "color": "#b1a799",
                  "name": "Dew"
                },
                {
                  "color": "#a59288",
                  "name": "Taupe"
                },
                {
                  "color": "#45423d",
                  "name": "Brindle"
                },
                {
                  "color": "#352f29",
                  "name": "Tarmac"
                },
                {
                  "color": "#484d38",
                  "name": "Olive"
                },
                {
                  "color": "#878a36",
                  "name": "Moss"
                },
                {
                  "color": "#aaae68",
                  "name": "Celery Green"
                }
              ]
            }
          ],
          "name": "Anchor Bay",
          "id": "anchor_bay"
        },
        {
          "colorways": [
            {
              "source": {
                "accessed": "2022-03-15",
                "name": "cascade.com",
                "unavailable": "2023-01-02",
                "url": "http://www.cascadeyarns.com/cascade-Cascade220.htm"
              },
              "colors": [
                {
                  "color": "#322934",
                  "name": "Galaxy"
                },
                {
                  "color": "#3d2a25",
                  "name": "Burnt Sienna Heather"
                },
                {
                  "color": "#a05c52",
                  "name": "Crabapple"
                },
                {
                  "color": "#541a19",
                  "name": "Auburn Heather"
                },
                {
                  "color": "#551223",
                  "name": "Burgundy"
                },
                {
                  "color": "#4d1322",
                  "name": "Red Wine Heather"
                },
                {
                  "color": "#700d14",
                  "name": "Red"
                },
                {
                  "color": "#4c0106",
                  "name": "Ruby"
                },
                {
                  "color": "#8a0410",
                  "name": "Christmas Red"
                },
                {
                  "color": "#8e181b",
                  "name": "Bright Red"
                },
                {
                  "color": "#9b2929",
                  "name": "Paprika"
                },
                {
                  "color": "#f6937f",
                  "name": "Desert Flower"
                },
                {
                  "color": "#b8947e",
                  "name": "Nectarine"
                },
                {
                  "color": "#ea7351",
                  "name": "Bright Nectarine"
                },
                {
                  "color": "#a84732",
                  "name": "Jack O'lantern"
                },
                {
                  "color": "#9f3019",
                  "name": "Burnt Orange"
                },
                {
                  "color": "#571e0f",
                  "name": "Ginger"
                },
                {
                  "color": "#6e1b11",
                  "name": "Japanese Maple"
                },
                {
                  "color": "#823126",
                  "name": "Provence"
                },
                {
                  "color": "#b32c14",
                  "name": "Tiger Lily"
                },
                {
                  "color": "#cb430a",
                  "name": "Blaze"
                },
                {
                  "color": "#d3862e",
                  "name": "California Poppy"
                },
                {
                  "color": "#d49d40",
                  "name": "Flax"
                },
                {
                  "color": "#dbac2a",
                  "name": "Gold"
                },
                {
                  "color": "#ef9c0c",
                  "name": "Gold Fusion"
                },
                {
                  "color": "#ba8b0f",
                  "name": "Goldenrod"
                },
                {
                  "color": "#c0b76f",
                  "name": "Lemon Yellow"
                },
                {
                  "color": "#d4c47b",
                  "name": "Butter"
                },
                {
                  "color": "#cec806",
                  "name": "Neon Yellow"
                },
                {
                  "color": "#acc09d",
                  "name": "Tender Greens"
                },
                {
                  "color": "#9bbb5b",
                  "name": "Citron"
                },
                {
                  "color": "#7d953c",
                  "name": "Primavera"
                },
                {
                  "color": "#848a34",
                  "name": "Leaf Green"
                },
                {
                  "color": "#5a8341",
                  "name": "Fern Heather"
                },
                {
                  "color": "#258d40",
                  "name": "Palm"
                },
                {
                  "color": "#283a2d",
                  "name": "Forest Green"
                },
                {
                  "color": "#457539",
                  "name": "Highland Green"
                },
                {
                  "color": "#758b62",
                  "name": "Grean Tea"
                },
                {
                  "color": "#233a28",
                  "name": "Shire"
                },
                {
                  "color": "#4b5b2e",
                  "name": "Irelande"
                },
                {
                  "color": "#33391e",
                  "name": "Chive"
                },
                {
                  "color": "#606330",
                  "name": "Turtle"
                },
                {
                  "color": "#0d2b20",
                  "name": "Forest Heather"
                },
                {
                  "color": "#0b835f",
                  "name": "Christmas Green"
                },
                {
                  "color": "#34654d",
                  "name": "Jade Heather"
                },
                {
                  "color": "#013431",
                  "name": "Hunter Green"
                },
                {
                  "color": "#415e5d",
                  "name": "Silver Spruce Heather"
                },
                {
                  "color": "#6d8b61",
                  "name": "Aventurine Heather"
                },
                {
                  "color": "#97c5b1",
                  "name": "Mint"
                },
                {
                  "color": "#355f59",
                  "name": "Lake Chelan Heather"
                },
                {
                  "color": "#0c9f8f",
                  "name": "Lagoon"
                },
                {
                  "color": "#075958",
                  "name": "Deep Blue Grass"
                },
                {
                  "color": "#82b8b8",
                  "name": "Aqua Haze"
                },
                {
                  "color": "#4d8785",
                  "name": "Mineral Blue"
                },
                {
                  "color": "#3a454e",
                  "name": "Stonewash"
                },
                {
                  "color": "#577a88",
                  "name": "Summer Sky Heather"
                },
                {
                  "color": "#44878c",
                  "name": "Bristol Blue"
                },
                {
                  "color": "#104f5e",
                  "name": "Pacific"
                },
                {
                  "color": "#095d6b",
                  "name": "Caribbean"
                },
                {
                  "color": "#49a4c1",
                  "name": "Aqua"
                },
                {
                  "color": "#064463",
                  "name": "Cyan Blue"
                },
                {
                  "color": "#0b324b",
                  "name": "Azure"
                },
                {
                  "color": "#0c253e",
                  "name": "Aporto"
                },
                {
                  "color": "#142138",
                  "name": "Mallard"
                },
                {
                  "color": "#0e192e",
                  "name": "Midnight Heather"
                },
                {
                  "color": "#192179",
                  "name": "Stratosphere"
                },
                {
                  "color": "#5073ad",
                  "name": "Deep Periwinkle"
                },
                {
                  "color": "#718394",
                  "name": "Blue Quartz Heather"
                },
                {
                  "color": "#182b4d",
                  "name": "Atlantic"
                },
                {
                  "color": "#5b8aa0",
                  "name": "Summer Sky"
                },
                {
                  "color": "#39475e",
                  "name": "Smoke Blue"
                },
                {
                  "color": "#778692",
                  "name": "Faded Denim"
                },
                {
                  "color": "#394d73",
                  "name": "Sapphire"
                },
                {
                  "color": "#242834",
                  "name": "Navy"
                },
                {
                  "color": "#35415d",
                  "name": "Colonial Blue Heather"
                },
                {
                  "color": "#606c85",
                  "name": "Westpoint Blue Heather"
                },
                {
                  "color": "#7f8e96",
                  "name": "Sky Blue"
                },
                {
                  "color": "#55779f",
                  "name": "Robbin Egg Blue"
                },
                {
                  "color": "#1b3575",
                  "name": "Blue Velvet"
                },
                {
                  "color": "#21253a",
                  "name": "Midnight Blue"
                },
                {
                  "color": "#142b51",
                  "name": "Lapis Heather"
                },
                {
                  "color": "#313d6b",
                  "name": "Blueberry Heather"
                },
                {
                  "color": "#696c9b",
                  "name": "Montmartre"
                },
                {
                  "color": "#59566f",
                  "name": "Dusky Violet"
                },
                {
                  "color": "#88829d",
                  "name": "Lavender Heather"
                },
                {
                  "color": "#493d60",
                  "name": "Mystic Purple"
                },
                {
                  "color": "#231d3a",
                  "name": "Prism Violet"
                },
                {
                  "color": "#1b162f",
                  "name": "Italian Plum"
                },
                {
                  "color": "#37144d",
                  "name": "Concord Grape"
                },
                {
                  "color": "#7257b7",
                  "name": "Deep Lavender"
                },
                {
                  "color": "#91759f",
                  "name": "Lilac Mist"
                },
                {
                  "color": "#3c2a8c",
                  "name": "Purple Hyacinth"
                },
                {
                  "color": "#7d4198",
                  "name": "Heather"
                },
                {
                  "color": "#3c2647",
                  "name": "Regal"
                },
                {
                  "color": "#2f1021",
                  "name": "Cabernet"
                },
                {
                  "color": "#a48191",
                  "name": "Helleborous Heather"
                },
                {
                  "color": "#392134",
                  "name": "Crushed Grapes"
                },
                {
                  "color": "#663e58",
                  "name": "Razzleberry Heather"
                },
                {
                  "color": "#a7748e",
                  "name": "Dusty Rose"
                },
                {
                  "color": "#7c656c",
                  "name": "Lepidolite Heather"
                },
                {
                  "color": "#25111e",
                  "name": "Eggplant"
                },
                {
                  "color": "#91828a",
                  "name": "Iridescence"
                },
                {
                  "color": "#74196c",
                  "name": "Magenta"
                },
                {
                  "color": "#d0b8c7",
                  "name": "Soft Pink"
                },
                {
                  "color": "#d38aa4",
                  "name": "Tutu"
                },
                {
                  "color": "#cd5f8b",
                  "name": "Cotton Candy"
                },
                {
                  "color": "#b73268",
                  "name": "Hot Pink"
                },
                {
                  "color": "#872660",
                  "name": "Cerise"
                },
                {
                  "color": "#bb344f",
                  "name": "Azalea"
                },
                {
                  "color": "#be5463",
                  "name": "Shrimp"
                },
                {
                  "color": "#9a373c",
                  "name": "Flamingo Heather"
                },
                {
                  "color": "#443f52",
                  "name": "Liberty Heather"
                },
                {
                  "color": "#686866",
                  "name": "Storm Cloud"
                },
                {
                  "color": "#868a99",
                  "name": "Indigo Frost Heather"
                },
                {
                  "color": "#dfded1",
                  "name": "White"
                },
                {
                  "color": "#7f8082",
                  "name": "Grey"
                },
                {
                  "color": "#323746",
                  "name": "Gris"
                },
                {
                  "color": "#131416",
                  "name": "Black"
                },
                {
                  "color": "#2f3031",
                  "name": "Jet"
                },
                {
                  "color": "#595e5e",
                  "name": "Charcoal Grey"
                },
                {
                  "color": "#84867a",
                  "name": "Silver Grey"
                },
                {
                  "color": "#aea99d",
                  "name": "Aspen Heather"
                },
                {
                  "color": "#555660",
                  "name": "Greystone Heather"
                },
                {
                  "color": "#271816",
                  "name": "Chocolate"
                },
                {
                  "color": "#1d1819",
                  "name": "Van Dyke Brown"
                },
                {
                  "color": "#342519",
                  "name": "Cocolate Heather"
                },
                {
                  "color": "#816653",
                  "name": "Praline"
                },
                {
                  "color": "#7c4e35",
                  "name": "Carob Brown"
                },
                {
                  "color": "#361f18",
                  "name": "Brown"
                },
                {
                  "color": "#956c3d",
                  "name": "Camel"
                },
                {
                  "color": "#e6e0c8",
                  "name": "Natural"
                },
                {
                  "color": "#c1a98b",
                  "name": "Beige"
                },
                {
                  "color": "#ae9e5a",
                  "name": "Pear"
                },
                {
                  "color": "#976522",
                  "name": "Sunflower"
                },
                {
                  "color": "#603c30",
                  "name": "Pumpkin Spice"
                },
                {
                  "color": "#846b2e",
                  "name": "Straw"
                },
                {
                  "color": "#a48b2e",
                  "name": "Birch Heather"
                },
                {
                  "color": "#8e7709",
                  "name": "Olive Oil"
                },
                {
                  "color": "#6e682f",
                  "name": "Dried Herb"
                },
                {
                  "color": "#706f5b",
                  "name": "Sparrow"
                },
                {
                  "color": "#303723",
                  "name": "Olive Heather"
                },
                {
                  "color": "#3b3736",
                  "name": "Vashon Island Heather"
                },
                {
                  "color": "#857463",
                  "name": "Walnut Heather"
                },
                {
                  "color": "#837d77",
                  "name": "Doeskin Heather"
                },
                {
                  "color": "#a29887",
                  "name": "Fog Hatt"
                },
                {
                  "color": "#9b8c7e",
                  "name": "River Rock"
                },
                {
                  "color": "#c2b393",
                  "name": "Antiqued Heather"
                },
                {
                  "color": "#766959",
                  "name": "Vinci"
                },
                {
                  "color": "#aa8f76",
                  "name": "Sand"
                },
                {
                  "color": "#5c5045",
                  "name": "Copper Heather"
                },
                {
                  "color": "#5e6b66",
                  "name": "Smoke Heather"
                },
                {
                  "color": "#4c6869",
                  "name": "Country Green"
                },
                {
                  "color": "#1f2c30",
                  "name": "Pine Grove"
                }
              ]
            }
          ],
          "name": "220 Solids & Heathers",
          "id": "220_solids_and_heathers"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "cascade.com",
                "url": "https://www.cascadeyarns.com/product/220-superwash",
                "accessed": "2023-01-02"
              },
              "colors": [
                {
                  "color": "#514d58",
                  "name": "Frost Grey"
                },
                {
                  "color": "#b3b1b6",
                  "name": "Harbor Mist"
                },
                {
                  "color": "#7c797e",
                  "name": "Sleet"
                },
                {
                  "color": "#303233",
                  "name": "Grey"
                },
                {
                  "color": "#171715",
                  "name": "Black"
                },
                {
                  "color": "#272727",
                  "name": "Jet"
                },
                {
                  "color": "#323132",
                  "name": "Charcoal"
                },
                {
                  "color": "#767871",
                  "name": "Silver Grey"
                },
                {
                  "color": "#989c96",
                  "name": "Aspen Heather"
                },
                {
                  "color": "#a7a58f",
                  "name": "White"
                },
                {
                  "color": "#ac98a6",
                  "name": "Orchid Ice"
                },
                {
                  "color": "#846777",
                  "name": "Dawn Pink"
                },
                {
                  "color": "#5b3647",
                  "name": "Then Theres Mauve"
                },
                {
                  "color": "#5c3245",
                  "name": "Razzleberry Heather"
                },
                {
                  "color": "#3d172e",
                  "name": "Marionberry"
                },
                {
                  "color": "#371c41",
                  "name": "Plum Purple"
                },
                {
                  "color": "#3d1f3d",
                  "name": "Gloxinia"
                },
                {
                  "color": "#523d69",
                  "name": "Heather"
                },
                {
                  "color": "#92778e",
                  "name": "Iris"
                },
                {
                  "color": "#5d4960",
                  "name": "Petunia Heather"
                },
                {
                  "color": "#7a6073",
                  "name": "Iridescense"
                },
                {
                  "color": "#382d47",
                  "name": "Nightshade"
                },
                {
                  "color": "#69698b",
                  "name": "Heirloom Lilac"
                },
                {
                  "color": "#9494b0",
                  "name": "Evening Haze"
                },
                {
                  "color": "#404e83",
                  "name": "Periwinkle"
                },
                {
                  "color": "#7d80a1",
                  "name": "Lavender"
                },
                {
                  "color": "#2c2439",
                  "name": "Mystic Purple"
                },
                {
                  "color": "#645c6f",
                  "name": "Purple Sage"
                },
                {
                  "color": "#2f2c4d",
                  "name": "Royal Purple"
                },
                {
                  "color": "#35285b",
                  "name": "Dark Violet"
                },
                {
                  "color": "#3f2d6f",
                  "name": "Purple Hyacinth"
                },
                {
                  "color": "#1b0c3c",
                  "name": "Violet Indigo"
                },
                {
                  "color": "#8a67af",
                  "name": "Amethyst"
                },
                {
                  "color": "#8b759f",
                  "name": "Light Iris"
                },
                {
                  "color": "#c197b8",
                  "name": "Mauve Mist"
                },
                {
                  "color": "#7a4365",
                  "name": "Atahitian Rose"
                },
                {
                  "color": "#641844",
                  "name": "Raspberry"
                },
                {
                  "color": "#3d0e2c",
                  "name": "Magenta"
                },
                {
                  "color": "#4c1e4c",
                  "name": "Plum Crazy"
                },
                {
                  "color": "#491626",
                  "name": "Very Berry"
                },
                {
                  "color": "#8d3351",
                  "name": "Flamingo Pink"
                },
                {
                  "color": "#a15c79",
                  "name": "Rose Petal"
                },
                {
                  "color": "#a56079",
                  "name": "Pink Rose"
                },
                {
                  "color": "#9b878c",
                  "name": "Soft Pink"
                },
                {
                  "color": "#947f86",
                  "name": "Strawberry Cream"
                },
                {
                  "color": "#967587",
                  "name": "Pink Ice"
                },
                {
                  "color": "#a5527b",
                  "name": "Cotton Candy"
                },
                {
                  "color": "#671938",
                  "name": "Berry Pink"
                },
                {
                  "color": "#b84c4b",
                  "name": "Strawberry Pink"
                },
                {
                  "color": "#dc9991",
                  "name": "Salmon"
                },
                {
                  "color": "#b35f5f",
                  "name": "Peach"
                },
                {
                  "color": "#ac4f43",
                  "name": "Coral"
                },
                {
                  "color": "#c13e51",
                  "name": "Deep Sea Coral"
                },
                {
                  "color": "#942a40",
                  "name": "Chrysanthemum"
                },
                {
                  "color": "#7a2326",
                  "name": "Garnet"
                },
                {
                  "color": "#9f4b45",
                  "name": "Faded Rose"
                },
                {
                  "color": "#aa8086",
                  "name": "Silver Pink"
                },
                {
                  "color": "#765350",
                  "name": "Ash Rose"
                },
                {
                  "color": "#2c141c",
                  "name": "Grape Wine"
                },
                {
                  "color": "#251316",
                  "name": "Malbec Heather"
                },
                {
                  "color": "#6f3e30",
                  "name": "Pumpkin Spice"
                },
                {
                  "color": "#271918",
                  "name": "Cordovan"
                },
                {
                  "color": "#27070d",
                  "name": "Red Wine Heather"
                },
                {
                  "color": "#371019",
                  "name": "Maroon"
                },
                {
                  "color": "#450612",
                  "name": "Ruby"
                },
                {
                  "color": "#770d19",
                  "name": "Really Red"
                },
                {
                  "color": "#530a13",
                  "name": "Christmas Red Heather"
                },
                {
                  "color": "#700a0f",
                  "name": "Sunset Orange"
                },
                {
                  "color": "#d0332d",
                  "name": "Cherry Tomato"
                },
                {
                  "color": "#a03015",
                  "name": "Tangerine Heather"
                },
                {
                  "color": "#c8613d",
                  "name": "Autumn Sunset"
                },
                {
                  "color": "#9d3316",
                  "name": "Pureed Pumpkin"
                },
                {
                  "color": "#281e25",
                  "name": "Galaxy"
                },
                {
                  "color": "#2b1815",
                  "name": "Cocoa"
                },
                {
                  "color": "#542818",
                  "name": "Copper Heather"
                },
                {
                  "color": "#562210",
                  "name": "Dark Ginger"
                },
                {
                  "color": "#6a3814",
                  "name": "Sandalwood"
                },
                {
                  "color": "#9c681f",
                  "name": "Golden"
                },
                {
                  "color": "#875210",
                  "name": "Gold Fusion"
                },
                {
                  "color": "#904a16",
                  "name": "Desert Sun"
                },
                {
                  "color": "#bc4f0c",
                  "name": "Marmalade"
                },
                {
                  "color": "#54130c",
                  "name": "Provence"
                },
                {
                  "color": "#681614",
                  "name": "Burnt Orange"
                },
                {
                  "color": "#a63723",
                  "name": "Pumpkin"
                },
                {
                  "color": "#91321a",
                  "name": "Blaze"
                },
                {
                  "color": "#e0b197",
                  "name": "Cream Puff"
                },
                {
                  "color": "#8e8b74",
                  "name": "Banana Cream"
                },
                {
                  "color": "#a4986a",
                  "name": "Yellow"
                },
                {
                  "color": "#af9653",
                  "name": "Lemon"
                },
                {
                  "color": "#ca9f06",
                  "name": "Daisy Yellow"
                },
                {
                  "color": "#ad9f73",
                  "name": "Chamomile"
                },
                {
                  "color": "#a17c34",
                  "name": "Daffodil"
                },
                {
                  "color": "#725a30",
                  "name": "Straw"
                },
                {
                  "color": "#624e36",
                  "name": "Mocha"
                },
                {
                  "color": "#7a6349",
                  "name": "Vinci"
                },
                {
                  "color": "#ac9872",
                  "name": "Antiqued Heather"
                },
                {
                  "color": "#473c32",
                  "name": "Walnut Heather"
                },
                {
                  "color": "#796c5f",
                  "name": "Doeskin Heather"
                },
                {
                  "color": "#947f74",
                  "name": "White Pepper Heather"
                },
                {
                  "color": "#a7a591",
                  "name": "Ecru"
                },
                {
                  "color": "#71655d",
                  "name": "Extra Creme Cafe"
                },
                {
                  "color": "#1c1009",
                  "name": "Chocolate"
                },
                {
                  "color": "#533f28",
                  "name": "Camel"
                },
                {
                  "color": "#382922",
                  "name": "Rich Brown"
                },
                {
                  "color": "#1c130f",
                  "name": "Bitter Chocolate"
                },
                {
                  "color": "#8e7c6c",
                  "name": "Irish Cream"
                },
                {
                  "color": "#857770",
                  "name": "Frosted Almond"
                },
                {
                  "color": "#abb91d",
                  "name": "Sulfur"
                },
                {
                  "color": "#7c742a",
                  "name": "Citron"
                },
                {
                  "color": "#454124",
                  "name": "Turtle"
                },
                {
                  "color": "#26281d",
                  "name": "Olive Heather"
                },
                {
                  "color": "#4f502a",
                  "name": "Avocado"
                },
                {
                  "color": "#58522c",
                  "name": "Cedar"
                },
                {
                  "color": "#5e5a4c",
                  "name": "Lincoln Heather"
                },
                {
                  "color": "#737f67",
                  "name": "Laurel Green"
                },
                {
                  "color": "#1b1f1a",
                  "name": "Pine Grove"
                },
                {
                  "color": "#363e2a",
                  "name": "Lichen"
                },
                {
                  "color": "#505750",
                  "name": "Smoke Heather"
                },
                {
                  "color": "#586845",
                  "name": "Seagrass"
                },
                {
                  "color": "#4b6560",
                  "name": "Chinois Green"
                },
                {
                  "color": "#95a89f",
                  "name": "Pale Jade"
                },
                {
                  "color": "#9d937f",
                  "name": "Awinter White"
                },
                {
                  "color": "#969088",
                  "name": "Feather Grey"
                },
                {
                  "color": "#97948b",
                  "name": "Ridge Rock"
                },
                {
                  "color": "#015225",
                  "name": "Christmas Green"
                },
                {
                  "color": "#19231d",
                  "name": "Forest Heather"
                },
                {
                  "color": "#1e3931",
                  "name": "Myrtle Heather"
                },
                {
                  "color": "#51a36b",
                  "name": "Green Spruce"
                },
                {
                  "color": "#234a2c",
                  "name": "Verdant Green"
                },
                {
                  "color": "#456e32",
                  "name": "Chartreuse"
                },
                {
                  "color": "#81a134",
                  "name": "Wasabi"
                },
                {
                  "color": "#507137",
                  "name": "Green Apple"
                },
                {
                  "color": "#909f51",
                  "name": "Lime"
                },
                {
                  "color": "#859a6c",
                  "name": "Lime Sherbet"
                },
                {
                  "color": "#5d7154",
                  "name": "Celery"
                },
                {
                  "color": "#4e7749",
                  "name": "Peppermint"
                },
                {
                  "color": "#273b1a",
                  "name": "Mint Green"
                },
                {
                  "color": "#233722",
                  "name": "Army Green"
                },
                {
                  "color": "#161f07",
                  "name": "Treetop"
                },
                {
                  "color": "#66782e",
                  "name": "Peridot"
                },
                {
                  "color": "#6b7d3d",
                  "name": "Moss"
                },
                {
                  "color": "#2b3328",
                  "name": "Shire"
                },
                {
                  "color": "#152a38",
                  "name": "Aporto"
                },
                {
                  "color": "#0d5a7a",
                  "name": "Celestial"
                },
                {
                  "color": "#308ea4",
                  "name": "Bachelor Button"
                },
                {
                  "color": "#056989",
                  "name": "Turquoise"
                },
                {
                  "color": "#0b446d",
                  "name": "Blue Sapphire"
                },
                {
                  "color": "#277a88",
                  "name": "Dark Aqua"
                },
                {
                  "color": "#002e3e",
                  "name": "Deep Ocean"
                },
                {
                  "color": "#649c9b",
                  "name": "Seafoam Heather"
                },
                {
                  "color": "#153c48",
                  "name": "Como Blue"
                },
                {
                  "color": "#5b8389",
                  "name": "Summer Sky Heather"
                },
                {
                  "color": "#124d53",
                  "name": "Pacific"
                },
                {
                  "color": "#005445",
                  "name": "Teal"
                },
                {
                  "color": "#0d3b40",
                  "name": "Emerald City"
                },
                {
                  "color": "#2e7f7b",
                  "name": "Blue Turquoise"
                },
                {
                  "color": "#072724",
                  "name": "Deep Teal"
                },
                {
                  "color": "#29574c",
                  "name": "Lake Chelan Heather"
                },
                {
                  "color": "#06342b",
                  "name": "Hunter Green"
                },
                {
                  "color": "#2f4a3e",
                  "name": "Duck Egg Blue"
                },
                {
                  "color": "#3f494c",
                  "name": "Pigeon Heather"
                },
                {
                  "color": "#131a2f",
                  "name": "Midnight Heather"
                },
                {
                  "color": "#2d6195",
                  "name": "Puget Sound"
                },
                {
                  "color": "#4f7faf",
                  "name": "Blue"
                },
                {
                  "color": "#638ba4",
                  "name": "Caribbean"
                },
                {
                  "color": "#17304c",
                  "name": "Blueberry"
                },
                {
                  "color": "#10161d",
                  "name": "Navy"
                },
                {
                  "color": "#1e2d47",
                  "name": "Inthe Navy"
                },
                {
                  "color": "#3b5a80",
                  "name": "Skyline Blue"
                },
                {
                  "color": "#5f799d",
                  "name": "Baby Denim"
                },
                {
                  "color": "#416383",
                  "name": "Blue Horizon"
                },
                {
                  "color": "#213556",
                  "name": "Sapphire Heather"
                },
                {
                  "color": "#283f72",
                  "name": "Hyacinth"
                },
                {
                  "color": "#142653",
                  "name": "Cobalt Heather"
                },
                {
                  "color": "#252e5f",
                  "name": "Blue Velvet"
                },
                {
                  "color": "#273b64",
                  "name": "Denim"
                },
                {
                  "color": "#375a60",
                  "name": "Mallard Blue"
                },
                {
                  "color": "#8da8a1",
                  "name": "Mint"
                },
                {
                  "color": "#384753",
                  "name": "Stormy Weather"
                },
                {
                  "color": "#4f6e78",
                  "name": "Smoke Blue"
                },
                {
                  "color": "#1e242f",
                  "name": "Colonial Blue Heather"
                },
                {
                  "color": "#4a546a",
                  "name": "Westpoint Blue Heather"
                },
                {
                  "color": "#516b92",
                  "name": "Placid Blue"
                },
                {
                  "color": "#9db0c9",
                  "name": "Sterling Blue"
                },
                {
                  "color": "#727977",
                  "name": "Alaska Sky"
                },
                {
                  "color": "#5e6162",
                  "name": "Space Needle"
                },
                {
                  "color": "#585d60",
                  "name": "Coast Heather"
                },
                {
                  "color": "#2e3132",
                  "name": "Stormy Seas Heather"
                },
                {
                  "color": "#4a535c",
                  "name": "Storm Cloud Heather"
                },
                {
                  "color": "#898c9b",
                  "name": "Indigo Frost Heather"
                }
              ]
            }
          ],
          "name": "220 Superwash",
          "id": "220_superwash"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "cascade.com",
                "url": "https://www.cascadeyarns.com/product/ultra-pima",
                "accessed": "2022-03-13"
              },
              "colors": [
                {
                  "color": "#727f98",
                  "name": "Dusty Blue"
                },
                {
                  "color": "#273d53",
                  "name": "Moonlight Blue"
                },
                {
                  "color": "#1f3040",
                  "name": "Indigo Blue"
                },
                {
                  "color": "#4b546f",
                  "name": "Colony Blue"
                },
                {
                  "color": "#7f868c",
                  "name": "Ice Blue"
                },
                {
                  "color": "#7e8ba7",
                  "name": "Sky Blue"
                },
                {
                  "color": "#5673b2",
                  "name": "Periwinkle"
                },
                {
                  "color": "#133481",
                  "name": "Cobalt"
                },
                {
                  "color": "#07172e",
                  "name": "Armada"
                },
                {
                  "color": "#11131e",
                  "name": "Navy"
                },
                {
                  "color": "#233369",
                  "name": "Blueberry"
                },
                {
                  "color": "#587fa5",
                  "name": "Cornflower"
                },
                {
                  "color": "#8ba5c3",
                  "name": "Baby Blue"
                },
                {
                  "color": "#c5d3e0",
                  "name": "Alaska Sky"
                },
                {
                  "color": "#4e858f",
                  "name": "Stratosphere"
                },
                {
                  "color": "#259ac1",
                  "name": "Aqua"
                },
                {
                  "color": "#056285",
                  "name": "Turqoise"
                },
                {
                  "color": "#064779",
                  "name": "Major Teal"
                },
                {
                  "color": "#074f56",
                  "name": "Teal"
                },
                {
                  "color": "#27938f",
                  "name": "Jade"
                },
                {
                  "color": "#2e928c",
                  "name": "Cool Mint"
                },
                {
                  "color": "#8fb0b2",
                  "name": "Ice"
                },
                {
                  "color": "#b5205d",
                  "name": "Pink Sapphire"
                },
                {
                  "color": "#d27094",
                  "name": "Primrose"
                },
                {
                  "color": "#c49ba6",
                  "name": "China Pink"
                },
                {
                  "color": "#ad7d9f",
                  "name": "Orchid"
                },
                {
                  "color": "#64336f",
                  "name": "Grape Juice"
                },
                {
                  "color": "#5b2d6d",
                  "name": "Pansy"
                },
                {
                  "color": "#a497b4",
                  "name": "Orchid Bloom"
                },
                {
                  "color": "#8c6b91",
                  "name": "Wood Violet"
                },
                {
                  "color": "#472961",
                  "name": "Regal"
                },
                {
                  "color": "#251f3c",
                  "name": "Purple Velvet"
                },
                {
                  "color": "#726591",
                  "name": "Lavender"
                },
                {
                  "color": "#ae9bae",
                  "name": "Purple Ice"
                },
                {
                  "color": "#464360",
                  "name": "Heathered Pansy"
                },
                {
                  "color": "#7a7b8a",
                  "name": "Lavender Blue"
                },
                {
                  "color": "#938ab0",
                  "name": "Delphinium"
                },
                {
                  "color": "#4d4477",
                  "name": "Dahlia Purple"
                },
                {
                  "color": "#251b50",
                  "name": "Deep Periwinkle"
                },
                {
                  "color": "#6a1356",
                  "name": "Magenta"
                },
                {
                  "color": "#bb6fa1",
                  "name": "Pink Roses"
                },
                {
                  "color": "#450f2f",
                  "name": "Syrah"
                },
                {
                  "color": "#761839",
                  "name": "Cranberry"
                },
                {
                  "color": "#952e4b",
                  "name": "Honeysuckle"
                },
                {
                  "color": "#e493a2",
                  "name": "Peony"
                },
                {
                  "color": "#cf2443",
                  "name": "Poppy Red"
                },
                {
                  "color": "#c5485a",
                  "name": "Deep Coral"
                },
                {
                  "color": "#d9807d",
                  "name": "Coral"
                },
                {
                  "color": "#d0999a",
                  "name": "Coral Cloud"
                },
                {
                  "color": "#b2908a",
                  "name": "Veiled Rose"
                },
                {
                  "color": "#bcb4b3",
                  "name": "Shell"
                },
                {
                  "color": "#ccaa92",
                  "name": "Dawn"
                },
                {
                  "color": "#d0ccc7",
                  "name": "Natural"
                },
                {
                  "color": "#9c8279",
                  "name": "Sand"
                },
                {
                  "color": "#50341f",
                  "name": "Chipmunk"
                },
                {
                  "color": "#3d2522",
                  "name": "Chocolate"
                },
                {
                  "color": "#a68c84",
                  "name": "Ginger Snap"
                },
                {
                  "color": "#7b5d48",
                  "name": "Maple Sugar"
                },
                {
                  "color": "#321008",
                  "name": "Cocoa"
                },
                {
                  "color": "#953d27",
                  "name": "Ginger"
                },
                {
                  "color": "#8e685b",
                  "name": "Sandstone"
                },
                {
                  "color": "#9a291f",
                  "name": "Paprika"
                },
                {
                  "color": "#d8784f",
                  "name": "Papaya"
                },
                {
                  "color": "#c8482e",
                  "name": "Tangerine"
                },
                {
                  "color": "#efa15e",
                  "name": "Marigold"
                },
                {
                  "color": "#c8592c",
                  "name": "Vibrant Orange"
                },
                {
                  "color": "#c58e5f",
                  "name": "Peach Cobbler"
                },
                {
                  "color": "#066e4e",
                  "name": "Emerald"
                },
                {
                  "color": "#68944a",
                  "name": "Kiwi"
                },
                {
                  "color": "#3a945e",
                  "name": "Spearmint"
                },
                {
                  "color": "#8dafa3",
                  "name": "Water Lily"
                },
                {
                  "color": "#aebf83",
                  "name": "Lime"
                },
                {
                  "color": "#889150",
                  "name": "Spring Green"
                },
                {
                  "color": "#51653f",
                  "name": "Sprout"
                },
                {
                  "color": "#5d8630",
                  "name": "Jasmine Green"
                },
                {
                  "color": "#163424",
                  "name": "Shamrock"
                },
                {
                  "color": "#395541",
                  "name": "Juniper"
                },
                {
                  "color": "#bec3b2",
                  "name": "Celery"
                },
                {
                  "color": "#cac29c",
                  "name": "Flan"
                },
                {
                  "color": "#e1c492",
                  "name": "Yellow Rose"
                },
                {
                  "color": "#daab74",
                  "name": "Sunburst"
                },
                {
                  "color": "#e4b19b",
                  "name": "White Peach"
                },
                {
                  "color": "#a70d1f",
                  "name": "Lipstick Red"
                },
                {
                  "color": "#740723",
                  "name": "Tomato"
                },
                {
                  "color": "#770821",
                  "name": "Wine"
                },
                {
                  "color": "#390d14",
                  "name": "Burgundy"
                },
                {
                  "color": "#6a383e",
                  "name": "Brick"
                },
                {
                  "color": "#8e6973",
                  "name": "Vintage Rose"
                },
                {
                  "color": "#ad8b7d",
                  "name": "Rose Dust"
                },
                {
                  "color": "#be4037",
                  "name": "Ember"
                },
                {
                  "color": "#131111",
                  "name": "True Black"
                },
                {
                  "color": "#2a2f33",
                  "name": "Dark Shadow"
                },
                {
                  "color": "#6d6b70",
                  "name": "Grey"
                },
                {
                  "color": "#7b7770",
                  "name": "Light Grey"
                },
                {
                  "color": "#d4d4d6",
                  "name": "White"
                },
                {
                  "color": "#5a6177",
                  "name": "Slate Grey"
                },
                {
                  "color": "#111217",
                  "name": "Night"
                },
                {
                  "color": "#4a7173",
                  "name": "Dark Sea Foam"
                },
                {
                  "color": "#69817d",
                  "name": "Ginseng"
                },
                {
                  "color": "#5e6c65",
                  "name": "Zen Green"
                },
                {
                  "color": "#929788",
                  "name": "Sage"
                },
                {
                  "color": "#88919d",
                  "name": "Blue Fog"
                },
                {
                  "color": "#b8bab8",
                  "name": "Soft Sage"
                },
                {
                  "color": "#677f87",
                  "name": "Stone Blue"
                },
                {
                  "color": "#628193",
                  "name": "Storm Blue"
                },
                {
                  "color": "#ebc97d",
                  "name": "Sunshine"
                },
                {
                  "color": "#dab376",
                  "name": "Buttercup"
                },
                {
                  "color": "#c68b09",
                  "name": "Gold"
                },
                {
                  "color": "#b9bc63",
                  "name": "Chartreuse"
                },
                {
                  "color": "#bba33a",
                  "name": "Rich Gold"
                },
                {
                  "color": "#736e47",
                  "name": "Olive Gray"
                },
                {
                  "color": "#888207",
                  "name": "Antique Moss"
                },
                {
                  "color": "#776d2f",
                  "name": "Bright Olive"
                },
                {
                  "color": "#3e422a",
                  "name": "Avocado"
                },
                {
                  "color": "#676d45",
                  "name": "Leaf Green"
                },
                {
                  "color": "#6f715c",
                  "name": "Summer Moss"
                },
                {
                  "color": "#bbb58d",
                  "name": "Reed"
                },
                {
                  "color": "#b2b5a2",
                  "name": "White Asparagus"
                },
                {
                  "color": "#717066",
                  "name": "Silver Sage"
                },
                {
                  "color": "#79786e",
                  "name": "Silver"
                },
                {
                  "color": "#cdbbb6",
                  "name": "Buff"
                },
                {
                  "color": "#8d8483",
                  "name": "Taupe"
                },
                {
                  "color": "#68585d",
                  "name": "Suede"
                },
                {
                  "color": "#413430",
                  "name": "Mocha"
                }
              ]
            }
          ],
          "name": "Ultra Pima",
          "id": "ultra_pima"
        }
      ]
    },
    {
      "name": "DROPS",
      "id": "drops",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "garnstudio.com",
                "url": "https://www.garnstudio.com/yarn.php?show=drops-alpaca",
                "accessed": "2022-03-20"
              },
              "colors": [
                {
                  "color": "#ece7e3",
                  "name": "White"
                },
                {
                  "color": "#eae2d8",
                  "name": "Off White"
                },
                {
                  "color": "#dad6d0",
                  "name": "Light Pearl Grey"
                },
                {
                  "color": "#b9b4af",
                  "name": "Light Grey"
                },
                {
                  "color": "#8c8a89",
                  "name": "Medium Grey"
                },
                {
                  "color": "#46413e",
                  "name": "Dark Grey"
                },
                {
                  "color": "#866650",
                  "name": "Light Brown"
                },
                {
                  "color": "#af9a88",
                  "name": "Nougat"
                },
                {
                  "color": "#c4b19e",
                  "name": "Light Nougat"
                },
                {
                  "color": "#c9a480",
                  "name": "Camel"
                },
                {
                  "color": "#dca55d",
                  "name": "Goldenrod"
                },
                {
                  "color": "#e3654c",
                  "name": "Orange"
                },
                {
                  "color": "#c45531",
                  "name": "Rust"
                },
                {
                  "color": "#e46864",
                  "name": "Coral"
                },
                {
                  "color": "#b81a26",
                  "name": "Red"
                },
                {
                  "color": "#83262e",
                  "name": "Tomato"
                },
                {
                  "color": "#752a24",
                  "name": "Maroon"
                },
                {
                  "color": "#7b3b38",
                  "name": "Light Maroon"
                },
                {
                  "color": "#8a472d",
                  "name": "Hazelnut"
                },
                {
                  "color": "#b66c5a",
                  "name": "Blush"
                },
                {
                  "color": "#98575d",
                  "name": "Dark Blush"
                },
                {
                  "color": "#b34c62",
                  "name": "Dark Pink"
                },
                {
                  "color": "#da9fad",
                  "name": "Medium Pink"
                },
                {
                  "color": "#e4b2b2",
                  "name": "Light Pink"
                },
                {
                  "color": "#dfc2c4",
                  "name": "Dusty Pink"
                },
                {
                  "color": "#d7c3c9",
                  "name": "Light Lavender"
                },
                {
                  "color": "#917078",
                  "name": "Mauve"
                },
                {
                  "color": "#866e7f",
                  "name": "Amethyst"
                },
                {
                  "color": "#6b5061",
                  "name": "Purple Fog"
                },
                {
                  "color": "#50374e",
                  "name": "Dark Purple"
                },
                {
                  "color": "#614554",
                  "name": "Burgundy"
                },
                {
                  "color": "#989da3",
                  "name": "Fog"
                },
                {
                  "color": "#a8b8cf",
                  "name": "Light Blue"
                },
                {
                  "color": "#575565",
                  "name": "Blue"
                },
                {
                  "color": "#494a68",
                  "name": "Captain Blue"
                },
                {
                  "color": "#393e5a",
                  "name": "Navy Blue"
                },
                {
                  "color": "#3f3f4d",
                  "name": "Dark Indigo"
                },
                {
                  "color": "#2e4e55",
                  "name": "Petrol"
                },
                {
                  "color": "#556f78",
                  "name": "Medium Petrol"
                },
                {
                  "color": "#0a96a5",
                  "name": "Dark Turquoise"
                },
                {
                  "color": "#a0c9c5",
                  "name": "Turquoise"
                },
                {
                  "color": "#96a4a5",
                  "name": "Mineral Blue"
                },
                {
                  "color": "#909a87",
                  "name": "Sea Fog"
                },
                {
                  "color": "#c0b855",
                  "name": "Bright Lime"
                },
                {
                  "color": "#ddca81",
                  "name": "Lemon Pie"
                },
                {
                  "color": "#bca13a",
                  "name": "Wheat Field"
                },
                {
                  "color": "#8d7a41",
                  "name": "Olive"
                },
                {
                  "color": "#68713d",
                  "name": "Green Grass"
                },
                {
                  "color": "#4f5749",
                  "name": "Forest Mix"
                },
                {
                  "color": "#4c5037",
                  "name": "Dark Green"
                },
                {
                  "color": "#1f1d1d",
                  "name": "Black"
                }
              ]
            }
          ],
          "name": "Alpaca",
          "id": "alpaca"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "garnstudio.com",
                "url": "https://www.garnstudio.com/yarn.php?show=drops-cotton-merino",
                "accessed": "2022-03-21"
              },
              "colors": [
                {
                  "color": "#efe7d7",
                  "name": "Off White"
                },
                {
                  "color": "#e4d2ca",
                  "name": "Powder"
                },
                {
                  "color": "#baaa99",
                  "name": "Beige"
                },
                {
                  "color": "#b0b3b2",
                  "name": "Water Pebbles"
                },
                {
                  "color": "#8d9191",
                  "name": "Medium Grey"
                },
                {
                  "color": "#5a5d5c",
                  "name": "Grey"
                },
                {
                  "color": "#f2d494",
                  "name": "Vanilla"
                },
                {
                  "color": "#ddaf52",
                  "name": "Mustard"
                },
                {
                  "color": "#ae4b2c",
                  "name": "Rust"
                },
                {
                  "color": "#c5123e",
                  "name": "Cherry Red"
                },
                {
                  "color": "#e5bdc4",
                  "name": "Powder Pink"
                },
                {
                  "color": "#82214a",
                  "name": "Bordeaux"
                },
                {
                  "color": "#dc9cb3",
                  "name": "Lilac"
                },
                {
                  "color": "#a07d9b",
                  "name": "Lavender"
                },
                {
                  "color": "#a1b4c6",
                  "name": "Ice Blue"
                },
                {
                  "color": "#7286a3",
                  "name": "Jeans Blue"
                },
                {
                  "color": "#272f4e",
                  "name": "Navy"
                },
                {
                  "color": "#00a1cc",
                  "name": "Turquoise"
                },
                {
                  "color": "#0f7682",
                  "name": "Storm Blue"
                },
                {
                  "color": "#95b1a9",
                  "name": "Sea Green"
                },
                {
                  "color": "#5c8162",
                  "name": "Forest Green"
                },
                {
                  "color": "#3d5143",
                  "name": "Dark Green"
                },
                {
                  "color": "#b4ba61",
                  "name": "Pistachio"
                },
                {
                  "color": "#26262b",
                  "name": "Black"
                }
              ]
            }
          ],
          "name": "Cotton Merino",
          "id": "cotton_merino"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "garnstudio.com",
                "url": "https://www.garnstudio.com/yarn.php?show=drops-muskat",
                "accessed": "2023-01-22"
              },
              "colors": [
                {
                  "color": "#eeeeee",
                  "name": "White"
                },
                {
                  "color": "#ece7df",
                  "name": "Off White"
                },
                {
                  "color": "#dacebc",
                  "name": "Pearl"
                },
                {
                  "color": "#d9c6b2",
                  "name": "Light Taupe"
                },
                {
                  "color": "#d6b590",
                  "name": "Camel"
                },
                {
                  "color": "#817163",
                  "name": "Taupe"
                },
                {
                  "color": "#ccc7c0",
                  "name": "Light Grey"
                },
                {
                  "color": "#f7e3ac",
                  "name": "Light Yellow"
                },
                {
                  "color": "#fbc970",
                  "name": "Vanilla Yellow"
                },
                {
                  "color": "#e9bd62",
                  "name": "Sunflower"
                },
                {
                  "color": "#d7a45c",
                  "name": "Mustard"
                },
                {
                  "color": "#e97c2c",
                  "name": "Light Orange"
                },
                {
                  "color": "#cf5311",
                  "name": "Dark Orange"
                },
                {
                  "color": "#c10025",
                  "name": "Red"
                },
                {
                  "color": "#8e0f25",
                  "name": "Bordeaux"
                },
                {
                  "color": "#a4434e",
                  "name": "Pomegranate"
                },
                {
                  "color": "#f27895",
                  "name": "Pink Panther"
                },
                {
                  "color": "#ed929d",
                  "name": "Desert Rose"
                },
                {
                  "color": "#f1b9be",
                  "name": "Powder Pink"
                },
                {
                  "color": "#fccfc4",
                  "name": "Light Peach"
                },
                {
                  "color": "#e2bdb0",
                  "name": "Pink Sand"
                },
                {
                  "color": "#ca7264",
                  "name": "Clay"
                },
                {
                  "color": "#9d665c",
                  "name": "Nutmeg"
                },
                {
                  "color": "#7b4c4d",
                  "name": "Clove"
                },
                {
                  "color": "#d5b9bb",
                  "name": "Silver Orchid"
                },
                {
                  "color": "#bc9fac",
                  "name": "Sweet Orchid"
                },
                {
                  "color": "#ab789e",
                  "name": "Lilac"
                },
                {
                  "color": "#a49eaf",
                  "name": "Lavender"
                },
                {
                  "color": "#232736",
                  "name": "Navy Blue"
                },
                {
                  "color": "#646a87",
                  "name": "Storm Blue"
                },
                {
                  "color": "#4d6679",
                  "name": "Denim"
                },
                {
                  "color": "#7b95a4",
                  "name": "Light Denim"
                },
                {
                  "color": "#b3cad2",
                  "name": "Ice Blue"
                },
                {
                  "color": "#79adc8",
                  "name": "Light Blue"
                },
                {
                  "color": "#004594",
                  "name": "Royal Blue"
                },
                {
                  "color": "#00647d",
                  "name": "Petrol"
                },
                {
                  "color": "#008db3",
                  "name": "Turquoise"
                },
                {
                  "color": "#8ec1af",
                  "name": "Mint"
                },
                {
                  "color": "#a8bf9e",
                  "name": "Light Mint"
                },
                {
                  "color": "#a1a786",
                  "name": "Pistachio"
                },
                {
                  "color": "#b4bfae",
                  "name": "Light Sea Green"
                },
                {
                  "color": "#809988",
                  "name": "Sage Green"
                },
                {
                  "color": "#737a68",
                  "name": "Moss Green"
                },
                {
                  "color": "#a6aa3c",
                  "name": "Apple Green"
                },
                {
                  "color": "#151316",
                  "name": "Black"
                }
              ]
            }
          ],
          "name": "Muskat",
          "id": "muskat"
        }
      ]
    },
    {
      "name": "Ella Rae",
      "id": "ella_rae",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "knittingfever.com",
                "url": "https://knittingfever.com/ella-rae/yarn/K-ERS?sortby=number&show_archived=1#",
                "accessed": "2023-01-09"
              },
              "colors": [
                {
                  "color": "#e3e0d8",
                  "name": "Vanilla"
                },
                {
                  "color": "#deb6ba",
                  "name": "Light Pink"
                },
                {
                  "color": "#eb91a8",
                  "name": "Pink"
                },
                {
                  "color": "#e5d588",
                  "name": "Yellow"
                },
                {
                  "color": "#b9d5a5",
                  "name": "Kiwi"
                },
                {
                  "color": "#95b2ca",
                  "name": "Lt. Blue"
                },
                {
                  "color": "#c29db5",
                  "name": "Pink Violet"
                },
                {
                  "color": "#d881a3",
                  "name": "Medium Pink"
                },
                {
                  "color": "#ca4a86",
                  "name": "Violet"
                },
                {
                  "color": "#b63b76",
                  "name": "Light Magenta"
                },
                {
                  "color": "#862b55",
                  "name": "Magenta Heather"
                },
                {
                  "color": "#74894a",
                  "name": "Olive"
                },
                {
                  "color": "#ce8f44",
                  "name": "Light Copper"
                },
                {
                  "color": "#e6cfac",
                  "name": "Beige"
                },
                {
                  "color": "#703a30",
                  "name": "Saddle"
                },
                {
                  "color": "#e6572d",
                  "name": "Orange"
                },
                {
                  "color": "#e8e1cd",
                  "name": "Ecru"
                },
                {
                  "color": "#9e8f82",
                  "name": "Cement"
                },
                {
                  "color": "#ad9a85",
                  "name": "Taupe"
                },
                {
                  "color": "#3c2d28",
                  "name": "Deep Brown"
                },
                {
                  "color": "#3a4e33",
                  "name": "Hunter"
                },
                {
                  "color": "#a6a7a8",
                  "name": "Light Grey"
                },
                {
                  "color": "#65605c",
                  "name": "Smoke"
                },
                {
                  "color": "#27252a",
                  "name": "Black"
                },
                {
                  "color": "#3f3147",
                  "name": "Violet"
                },
                {
                  "color": "#7f2c2f",
                  "name": "Deep Read"
                },
                {
                  "color": "#b72d31",
                  "name": "Red"
                },
                {
                  "color": "#1d1e2c",
                  "name": "Deep Navy"
                },
                {
                  "color": "#374379",
                  "name": "Royal"
                },
                {
                  "color": "#5783ba",
                  "name": "Blueberry"
                },
                {
                  "color": "#72a6d0",
                  "name": "Azure"
                },
                {
                  "color": "#4d2839",
                  "name": "Deep Purple"
                },
                {
                  "color": "#823041",
                  "name": "Cranberry"
                },
                {
                  "color": "#32bacb",
                  "name": "Turquoise"
                },
                {
                  "color": "#0f8c7b",
                  "name": "Jade"
                },
                {
                  "color": "#225966",
                  "name": "Slate Blue"
                },
                {
                  "color": "#882e28",
                  "name": "Russet"
                },
                {
                  "color": "#3b8863",
                  "name": "Kelly Green"
                },
                {
                  "color": "#6a507e",
                  "name": "Iris Purple"
                },
                {
                  "color": "#2ca1b9",
                  "name": "Deep Turq"
                },
                {
                  "color": "#263652",
                  "name": "Midnight"
                },
                {
                  "color": "#552c48",
                  "name": "Deep Wine"
                },
                {
                  "color": "#204040",
                  "name": "Forest Green"
                },
                {
                  "color": "#ddba5e",
                  "name": "Lemon Gold"
                },
                {
                  "color": "#8392b3",
                  "name": "Periwinkle"
                },
                {
                  "color": "#a17e9a",
                  "name": "Orchid"
                },
                {
                  "color": "#5e3227",
                  "name": "Cocoa Brown"
                },
                {
                  "color": "#4a7796",
                  "name": "Wedgeblue"
                },
                {
                  "color": "#8f9044",
                  "name": "Cactus"
                },
                {
                  "color": "#6c5c60",
                  "name": "Lilac"
                },
                {
                  "color": "#4f523b",
                  "name": "Hunter"
                },
                {
                  "color": "#b2aeac",
                  "name": "Pearl"
                },
                {
                  "color": "#844127",
                  "name": "Tomato"
                },
                {
                  "color": "#732936",
                  "name": "Maroon Flush"
                },
                {
                  "color": "#8c7275",
                  "name": "Dusty Rose"
                },
                {
                  "color": "#6f8095",
                  "name": "Ocean Blue"
                },
                {
                  "color": "#3a261d",
                  "name": "Coffe Bean"
                },
                {
                  "color": "#263429",
                  "name": "Forest Green"
                },
                {
                  "color": "#bba299",
                  "name": "Coral"
                },
                {
                  "color": "#9fb3ac",
                  "name": "Mint Green"
                },
                {
                  "color": "#2e3a4f",
                  "name": "Majestic Blue"
                },
                {
                  "color": "#465940",
                  "name": "Mystic Green"
                },
                {
                  "color": "#4c579d",
                  "name": "Blue Bonnet"
                },
                {
                  "color": "#c85f86",
                  "name": "Bubble Gum Pink"
                },
                {
                  "color": "#62397f",
                  "name": "Purple Crayon"
                },
                {
                  "color": "#136960",
                  "name": "Emerald City"
                },
                {
                  "color": "#4e0c49",
                  "name": "Magenta"
                },
                {
                  "color": "#937240",
                  "name": "Camel"
                },
                {
                  "color": "#e9a416",
                  "name": "Sunflower"
                },
                {
                  "color": "#7e3817",
                  "name": "Burnt Sienna"
                },
                {
                  "color": "#601129",
                  "name": "Merlot"
                },
                {
                  "color": "#503c24",
                  "name": "Taupe"
                },
                {
                  "color": "#2f172e",
                  "name": "Amethyst Purple"
                },
                {
                  "color": "#3e6450",
                  "name": "Limestone Green"
                },
                {
                  "color": "#9e497b",
                  "name": "Deep Orchid"
                },
                {
                  "color": "#bf418a",
                  "name": "Fuchsia"
                },
                {
                  "color": "#7a6ea2",
                  "name": "Lavender"
                },
                {
                  "color": "#a4cb5b",
                  "name": "Lime"
                },
                {
                  "color": "#80b07a",
                  "name": "Yellow Green"
                },
                {
                  "color": "#4b3a2d",
                  "name": "Rifle Green"
                },
                {
                  "color": "#15414e",
                  "name": "Jewel"
                },
                {
                  "color": "#3371a7",
                  "name": "Elm Blue"
                },
                {
                  "color": "#49438c",
                  "name": "Periwinkle"
                },
                {
                  "color": "#262e82",
                  "name": "Rich Royal"
                },
                {
                  "color": "#966a98",
                  "name": "Medium Violet"
                },
                {
                  "color": "#231a30",
                  "name": "Regal Violet"
                },
                {
                  "color": "#d6b223",
                  "name": "Honey Mustard"
                },
                {
                  "color": "#90ac6f",
                  "name": "Pistachio"
                },
                {
                  "color": "#bdb3b1",
                  "name": "Eggnog"
                },
                {
                  "color": "#bca689",
                  "name": "Desert Sand"
                },
                {
                  "color": "#d0a6bd",
                  "name": "Hollyhock"
                },
                {
                  "color": "#5476a3",
                  "name": "Blueberry"
                },
                {
                  "color": "#4f8c96",
                  "name": "Tahiti Teal"
                },
                {
                  "color": "#2d3517",
                  "name": "Seaweed"
                },
                {
                  "color": "#5e200c",
                  "name": "Rosewood"
                },
                {
                  "color": "#2e3648",
                  "name": "Pacific Blue"
                },
                {
                  "color": "#221815",
                  "name": "Brown Derby Heather"
                },
                {
                  "color": "#280e14",
                  "name": "Claret Heather"
                },
                {
                  "color": "#385237",
                  "name": "Parsley Heather"
                },
                {
                  "color": "#401f23",
                  "name": "Cherry Wood Heather"
                },
                {
                  "color": "#0d1625",
                  "name": "Blue Gen Heather"
                },
                {
                  "color": "#2c1c2f",
                  "name": "Wine Berry Heather"
                },
                {
                  "color": "#2f544c",
                  "name": "Amazon Heather"
                },
                {
                  "color": "#705e29",
                  "name": "Driftwood Heather"
                },
                {
                  "color": "#903922",
                  "name": "Flamingo Heather"
                },
                {
                  "color": "#334a26",
                  "name": "Dell Green Heather"
                },
                {
                  "color": "#193569",
                  "name": "Governor Bay Heather"
                },
                {
                  "color": "#523340",
                  "name": "Mulberry Heather"
                },
                {
                  "color": "#492b7a",
                  "name": "Purple Heart Heather"
                },
                {
                  "color": "#0d1d29",
                  "name": "Deep Sea Heather"
                },
                {
                  "color": "#4f1317",
                  "name": "Red Robin Heather"
                },
                {
                  "color": "#3c2a1a",
                  "name": "Pueblo Heather"
                },
                {
                  "color": "#31322c",
                  "name": "Charcoal Heather"
                },
                {
                  "color": "#3f3f3f",
                  "name": "Flint Heather"
                },
                {
                  "color": "#8b9089",
                  "name": "Taupe Grey Heather"
                },
                {
                  "color": "#626429",
                  "name": "Pea Soup Heather"
                },
                {
                  "color": "#6a5b2e",
                  "name": "Luxor Gold Heather"
                },
                {
                  "color": "#616c81",
                  "name": "Moody Blue Heather"
                },
                {
                  "color": "#613455",
                  "name": "Red Violet Heather"
                },
                {
                  "color": "#3b3448",
                  "name": "Mulled Wine Heather"
                },
                {
                  "color": "#625a48",
                  "name": "Shadow Heather"
                },
                {
                  "color": "#4b583a",
                  "name": "Everglade Heather"
                },
                {
                  "color": "#1f5545",
                  "name": "Goblin Green Heather"
                },
                {
                  "color": "#1f100e",
                  "name": "Spicy Mix Heather"
                },
                {
                  "color": "#717473",
                  "name": "Deluge Heather"
                },
                {
                  "color": "#64a095",
                  "name": "Bermuda Heather"
                },
                {
                  "color": "#728935",
                  "name": "Lime Green Heather"
                },
                {
                  "color": "#94886d",
                  "name": "Oatmeal Heather"
                },
                {
                  "color": "#928a7f",
                  "name": "Moonrock Heather"
                },
                {
                  "color": "#988f65",
                  "name": "Banana Boat Heather"
                },
                {
                  "color": "#7e8a5c",
                  "name": "Keylime Pie Heather"
                },
                {
                  "color": "#8e6a45",
                  "name": "Gold Rush Heather"
                },
                {
                  "color": "#663a3a",
                  "name": "Chocochino Heather"
                },
                {
                  "color": "#33483d",
                  "name": "Rainforest Heather"
                },
                {
                  "color": "#192d42",
                  "name": "Deep Blue Sea Heather"
                },
                {
                  "color": "#3f2b4d",
                  "name": "Grape Dust Heather"
                },
                {
                  "color": "#973e5a",
                  "name": "Dragonfruit Heather"
                },
                {
                  "color": "#68686b",
                  "name": "Stonewall Heather"
                }
              ]
            }
          ],
          "name": "Superwash Classic",
          "id": "superwash_classic"
        }
      ]
    },
    {
      "name": "Gründl",
      "id": "gruendl",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "gruendl.com",
                "url": "https://www.gruendl.com/cotton-fun/c762-18",
                "accessed": "2022-03-20"
              },
              "colors": [
                {
                  "color": "#dde3ef",
                  "name": "Weiß",
                  "url": "https://www.gruendl.com/cotton-fun/c762-01"
                },
                {
                  "color": "#dfd9d1",
                  "name": "Creme",
                  "url": "https://www.gruendl.com/cotton-fun/c762-02"
                },
                {
                  "color": "#f2dba3",
                  "name": "Pastellgelb",
                  "url": "https://www.gruendl.com/cotton-fun/c762-22"
                },
                {
                  "color": "#f3aa47",
                  "name": "Mais",
                  "url": "https://www.gruendl.com/cotton-fun/c762-04"
                },
                {
                  "color": "#f19a5d",
                  "name": "Apricot",
                  "url": "https://www.gruendl.com/cotton-fun/c762-17"
                },
                {
                  "color": "#e6401a",
                  "name": "Orange",
                  "url": "https://www.gruendl.com/cotton-fun/c762-18"
                },
                {
                  "color": "#e53c8a",
                  "name": "Fuchsia",
                  "url": "https://www.gruendl.com/cotton-fun/c762-20"
                },
                {
                  "color": "#e4242d",
                  "name": "Signalrot",
                  "url": "https://www.gruendl.com/cotton-fun/c762-06"
                },
                {
                  "color": "#d7dbaa",
                  "name": "Hellgrün",
                  "url": "https://www.gruendl.com/cotton-fun/c762-23"
                },
                {
                  "color": "#48bd62",
                  "name": "Froschgrün",
                  "url": "https://www.gruendl.com/cotton-fun/c762-12"
                },
                {
                  "color": "#07ac87",
                  "name": "Grasgrün",
                  "url": "https://www.gruendl.com/cotton-fun/c762-26"
                },
                {
                  "color": "#a44593",
                  "name": "Purpur",
                  "url": "https://www.gruendl.com/cotton-fun/c762-21"
                },
                {
                  "color": "#3abbe7",
                  "name": "Himmelblau",
                  "url": "https://www.gruendl.com/cotton-fun/c762-09"
                },
                {
                  "color": "#21a9b5",
                  "name": "Türkisblau",
                  "url": "https://www.gruendl.com/cotton-fun/c762-24"
                },
                {
                  "color": "#0a7ace",
                  "name": "Royalblau",
                  "url": "https://www.gruendl.com/cotton-fun/c762-10"
                },
                {
                  "color": "#2a3356",
                  "name": "Marine",
                  "url": "https://www.gruendl.com/cotton-fun/c762-11"
                },
                {
                  "color": "#a49da7",
                  "name": "Hellgrau",
                  "url": "https://www.gruendl.com/cotton-fun/c762-27"
                },
                {
                  "color": "#af6d5c",
                  "name": "Nougat",
                  "url": "https://www.gruendl.com/cotton-fun/c762-14"
                },
                {
                  "color": "#727272",
                  "name": "Anthrazit",
                  "url": "https://www.gruendl.com/cotton-fun/c762-25"
                },
                {
                  "color": "#141414",
                  "name": "Schwarz",
                  "url": "https://www.gruendl.com/cotton-fun/c762-16"
                },
                {
                  "color": "#eed3dc",
                  "name": "Orchidee",
                  "url": "https://www.gruendl.com/cotton-fun/c762-37"
                },
                {
                  "color": "#c2b6df",
                  "name": "Violett",
                  "url": "https://www.gruendl.com/cotton-fun/c762-35"
                },
                {
                  "color": "#90d0cb",
                  "name": "Mint",
                  "url": "https://www.gruendl.com/cotton-fun/c762-34"
                },
                {
                  "color": "#abbcd7",
                  "name": "Babyblau",
                  "url": "https://www.gruendl.com/cotton-fun/c762-36"
                }
              ]
            }
          ],
          "name": "Cotton Fun",
          "id": "cotton_fun"
        }
      ]
    },
    {
      "name": "Herrschners",
      "id": "herrschners",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "herrschners.com",
                "url": "https://www.herrschners.com/herrschners-worsted-8-yarn/",
                "accessed": "2022-07-27"
              },
              "colors": [
                {
                  "color": "#d1d2cb",
                  "name": "White"
                },
                {
                  "color": "#cbc3b2",
                  "name": "Ivory"
                },
                {
                  "color": "#c8baa0",
                  "name": "Aran"
                },
                {
                  "color": "#be772d",
                  "name": "Goldenrod"
                },
                {
                  "color": "#850724",
                  "name": "True Red"
                },
                {
                  "color": "#233569",
                  "name": "Royal"
                },
                {
                  "color": "#1a1a19",
                  "name": "Black"
                },
                {
                  "color": "#1c96af",
                  "name": "Seaspray"
                },
                {
                  "color": "#03425c",
                  "name": "Blue Smoke"
                },
                {
                  "color": "#848e71",
                  "name": "Leaf"
                },
                {
                  "color": "#4e674c",
                  "name": "Meadow"
                },
                {
                  "color": "#7fb0cd",
                  "name": "Sterling"
                },
                {
                  "color": "#2d6ea1",
                  "name": "China Blue"
                },
                {
                  "color": "#292945",
                  "name": "Midnight"
                },
                {
                  "color": "#b79c82",
                  "name": "Sandstone"
                },
                {
                  "color": "#815b40",
                  "name": "Pecan"
                },
                {
                  "color": "#704628",
                  "name": "Walnut"
                },
                {
                  "color": "#482f2c",
                  "name": "Espresso"
                },
                {
                  "color": "#a887a4",
                  "name": "Pale Orchid"
                },
                {
                  "color": "#645986",
                  "name": "Orchid"
                },
                {
                  "color": "#73baaf",
                  "name": "Aquamarine"
                },
                {
                  "color": "#44a499",
                  "name": "Sea Green"
                },
                {
                  "color": "#046c60",
                  "name": "Jade"
                },
                {
                  "color": "#e99e85",
                  "name": "Peachy"
                },
                {
                  "color": "#d26252",
                  "name": "Salmon"
                },
                {
                  "color": "#a72c2a",
                  "name": "Honeysuckle"
                },
                {
                  "color": "#ecbb63",
                  "name": "Soft Yellow"
                },
                {
                  "color": "#939393",
                  "name": "Medium Grey"
                },
                {
                  "color": "#45484c",
                  "name": "Dark Grey"
                },
                {
                  "color": "#e493a3",
                  "name": "Posy"
                },
                {
                  "color": "#c14969",
                  "name": "Raspberry"
                },
                {
                  "color": "#5c2d6e",
                  "name": "Eggplant"
                },
                {
                  "color": "#66467b",
                  "name": "Lavender"
                },
                {
                  "color": "#e2b374",
                  "name": "Soft Gold"
                },
                {
                  "color": "#f6cb63",
                  "name": "Daffodil"
                },
                {
                  "color": "#8fb361",
                  "name": "Lime"
                },
                {
                  "color": "#263f20",
                  "name": "Dark Moss"
                },
                {
                  "color": "#217b2d",
                  "name": "Emerald"
                },
                {
                  "color": "#793a32",
                  "name": "Auburn"
                },
                {
                  "color": "#862842",
                  "name": "Cranberry"
                },
                {
                  "color": "#8b2e1f",
                  "name": "Burnt"
                },
                {
                  "color": "#302925",
                  "name": "Bark"
                },
                {
                  "color": "#185e4f",
                  "name": "Spruce"
                },
                {
                  "color": "#4b918a",
                  "name": "Glacier"
                },
                {
                  "color": "#4a6a8a",
                  "name": "Country Blue"
                },
                {
                  "color": "#4a8e9c",
                  "name": "Teal"
                },
                {
                  "color": "#efb3ab",
                  "name": "Blush"
                },
                {
                  "color": "#4b4b2b",
                  "name": "Deep Forest"
                },
                {
                  "color": "#693258",
                  "name": "Boysenberry"
                },
                {
                  "color": "#420b2f",
                  "name": "Plum Wine"
                },
                {
                  "color": "#135575",
                  "name": "Electric"
                },
                {
                  "color": "#acced1",
                  "name": "Icy Teal"
                },
                {
                  "color": "#555541",
                  "name": "Olive"
                },
                {
                  "color": "#8d5c1f",
                  "name": "Ochre"
                },
                {
                  "color": "#384527",
                  "name": "Army"
                },
                {
                  "color": "#646b6e",
                  "name": "Gunmetal"
                },
                {
                  "color": "#b32e3e",
                  "name": "Lingonberry"
                },
                {
                  "color": "#a95b6a",
                  "name": "Tea Rose"
                },
                {
                  "color": "#54242d",
                  "name": "Mahogany"
                },
                {
                  "color": "#7371a2",
                  "name": "Periwinkle"
                },
                {
                  "color": "#7a98a4",
                  "name": "Stonewash"
                },
                {
                  "color": "#72858c",
                  "name": "Chambray"
                },
                {
                  "color": "#931131",
                  "name": "Victorian Red"
                },
                {
                  "color": "#183d1c",
                  "name": "Green"
                },
                {
                  "color": "#ee5216",
                  "name": "Blaze"
                },
                {
                  "color": "#817b2e",
                  "name": "Stem"
                },
                {
                  "color": "#8a7a58",
                  "name": "Greige"
                },
                {
                  "color": "#878693",
                  "name": "Prism"
                },
                {
                  "color": "#b05c6c",
                  "name": "Berry"
                },
                {
                  "color": "#838d68",
                  "name": "Jeweled"
                },
                {
                  "color": "#875b50",
                  "name": "Spice"
                },
                {
                  "color": "#607f5c",
                  "name": "Tuscan Night"
                },
                {
                  "color": "#628995",
                  "name": "Glacier Bay"
                },
                {
                  "color": "#21608d",
                  "name": "Tidal Wave"
                },
                {
                  "color": "#8b5f6b",
                  "name": "Star Spangled"
                },
                {
                  "color": "#885e56",
                  "name": "Christmas"
                },
                {
                  "color": "#9d695a",
                  "name": "Rose Garden"
                },
                {
                  "color": "#72475f",
                  "name": "Crushed Berries"
                },
                {
                  "color": "#3d3622",
                  "name": "Camouflage"
                },
                {
                  "color": "#7b95a1",
                  "name": "Arctic Circle"
                },
                {
                  "color": "#9baea5",
                  "name": "Beach Glass"
                },
                {
                  "color": "#c5ae9c",
                  "name": "Macchiato"
                },
                {
                  "color": "#604a44",
                  "name": "Bouquet"
                },
                {
                  "color": "#767875",
                  "name": "Tunnel Vision"
                },
                {
                  "color": "#7a7935",
                  "name": "Lemon Tree"
                },
                {
                  "color": "#aa4c18",
                  "name": "Chestnut"
                },
                {
                  "color": "#8c8f5a",
                  "name": "Luffa"
                },
                {
                  "color": "#a09888",
                  "name": "Sleet"
                }
              ]
            }
          ],
          "name": "Worsted 8",
          "id": "worsted-8"
        }
      ]
    },
    {
      "name": "Himalaya",
      "id": "himalaya",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "himalaya.com",
                "url": "http://www.himalaya.com.tr/dolphin-baby.html",
                "accessed": "2023-01-04"
              },
              "colors": [
                {
                  "color": "#d8dbe2",
                  "name": "80301"
                },
                {
                  "color": "#e6dc79",
                  "name": "80302"
                },
                {
                  "color": "#d5c1d6",
                  "name": "80303"
                },
                {
                  "color": "#ada3c9",
                  "name": "80305"
                },
                {
                  "color": "#b1d1e9",
                  "name": "80306"
                },
                {
                  "color": "#bfdcda",
                  "name": "80307"
                },
                {
                  "color": "#c4c7c8",
                  "name": "80308"
                },
                {
                  "color": "#de9dbf",
                  "name": "80309"
                },
                {
                  "color": "#821b36",
                  "name": "80310"
                },
                {
                  "color": "#25252a",
                  "name": "80311"
                },
                {
                  "color": "#df5345",
                  "name": "80312"
                },
                {
                  "color": "#d5ca8a",
                  "name": "80313"
                },
                {
                  "color": "#cf2256",
                  "name": "80314"
                },
                {
                  "color": "#64bbd4",
                  "name": "80315"
                },
                {
                  "color": "#da7953",
                  "name": "80316"
                },
                {
                  "color": "#b0a49d",
                  "name": "80317"
                },
                {
                  "color": "#ba2324",
                  "name": "80318"
                },
                {
                  "color": "#ddaec5",
                  "name": "80319"
                },
                {
                  "color": "#646b7e",
                  "name": "80320"
                },
                {
                  "color": "#2b335e",
                  "name": "80321"
                },
                {
                  "color": "#541c32",
                  "name": "80322"
                },
                {
                  "color": "#e8aead",
                  "name": "80323"
                },
                {
                  "color": "#e24e7d",
                  "name": "80324"
                },
                {
                  "color": "#b0bbca",
                  "name": "80325"
                },
                {
                  "color": "#4babde",
                  "name": "80326"
                },
                {
                  "color": "#6e9fd3",
                  "name": "80327"
                },
                {
                  "color": "#402149",
                  "name": "80328"
                },
                {
                  "color": "#3e4f9b",
                  "name": "80329"
                },
                {
                  "color": "#c49755",
                  "name": "80330"
                },
                {
                  "color": "#176763",
                  "name": "80331"
                },
                {
                  "color": "#dd6f88",
                  "name": "80332"
                },
                {
                  "color": "#e1b795",
                  "name": "80333"
                },
                {
                  "color": "#a17586",
                  "name": "80334"
                },
                {
                  "color": "#46b8a9",
                  "name": "80335"
                },
                {
                  "color": "#35190e",
                  "name": "80336"
                },
                {
                  "color": "#976f45",
                  "name": "80337"
                },
                {
                  "color": "#883758",
                  "name": "80338"
                },
                {
                  "color": "#520d29",
                  "name": "80339"
                },
                {
                  "color": "#552f52",
                  "name": "80340"
                },
                {
                  "color": "#365c84",
                  "name": "80341"
                },
                {
                  "color": "#c2bfa8",
                  "name": "80342"
                },
                {
                  "color": "#231610",
                  "name": "80343"
                },
                {
                  "color": "#a9b4cc",
                  "name": "80344"
                },
                {
                  "color": "#addcca",
                  "name": "80345"
                },
                {
                  "color": "#eb9891",
                  "name": "80346"
                },
                {
                  "color": "#b3d3ca",
                  "name": "80347"
                },
                {
                  "color": "#3e7f77",
                  "name": "80348"
                },
                {
                  "color": "#bea6aa",
                  "name": "80349"
                },
                {
                  "color": "#bfeb9a",
                  "name": "80350"
                },
                {
                  "color": "#c2c3c6",
                  "name": "80351"
                },
                {
                  "color": "#ba1c27",
                  "name": "80352"
                },
                {
                  "color": "#e4dbbf",
                  "name": "80353"
                },
                {
                  "color": "#579287",
                  "name": "80354"
                },
                {
                  "color": "#dd7a60",
                  "name": "80355"
                },
                {
                  "color": "#c3709b",
                  "name": "80356"
                },
                {
                  "color": "#c2c5ba",
                  "name": "80357"
                },
                {
                  "color": "#692b66",
                  "name": "80358"
                },
                {
                  "color": "#c9cf9d",
                  "name": "80359"
                },
                {
                  "color": "#568652",
                  "name": "80360"
                },
                {
                  "color": "#605d27",
                  "name": "80361"
                },
                {
                  "color": "#16352b",
                  "name": "80362"
                },
                {
                  "color": "#dcddd2",
                  "name": "80363"
                },
                {
                  "color": "#b99fd0",
                  "name": "80364"
                },
                {
                  "color": "#bfa17c",
                  "name": "80365"
                },
                {
                  "color": "#74503b",
                  "name": "80366"
                },
                {
                  "color": "#3f4144",
                  "name": "80367"
                },
                {
                  "color": "#e29d45",
                  "name": "80368"
                },
                {
                  "color": "#828883",
                  "name": "80369"
                }
              ]
            }
          ],
          "name": "Dolphin Baby",
          "id": "dolphin_baby"
        }
      ]
    },
    {
      "name": "Hobbii",
      "id": "hobbii",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "hobbii.com",
                "url": "https://hobbii.com/rainbow-cotton-8-8",
                "accessed": "2022-03-20"
              },
              "colors": [
                {
                  "color": "#fdf9f7",
                  "name": "White",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9659"
                },
                {
                  "color": "#faf7f1",
                  "name": "Natural White",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9660"
                },
                {
                  "color": "#f2dec9",
                  "name": "Nude",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9661"
                },
                {
                  "color": "#e4ceaf",
                  "name": "Beige",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9662"
                },
                {
                  "color": "#8a705c",
                  "name": "Grey Brown",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9663"
                },
                {
                  "color": "#c58965",
                  "name": "Light Brown",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9664"
                },
                {
                  "color": "#5f3b3b",
                  "name": "Brown",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9665"
                },
                {
                  "color": "#4a3933",
                  "name": "Dark Brown",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9666"
                },
                {
                  "color": "#1e1c1f",
                  "name": "Black",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9667"
                },
                {
                  "color": "#4e505c",
                  "name": "Anthracite Grey",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9668"
                },
                {
                  "color": "#5b5654",
                  "name": "Dark Grey",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9669"
                },
                {
                  "color": "#83716c",
                  "name": "Volcano Gray",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9670"
                },
                {
                  "color": "#998890",
                  "name": "Greyish Purple",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9671"
                },
                {
                  "color": "#bab9bc",
                  "name": "Silver Gray",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9672"
                },
                {
                  "color": "#c2bab1",
                  "name": "Grey",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9673"
                },
                {
                  "color": "#cac9c7",
                  "name": "Light Grey",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9674"
                },
                {
                  "color": "#e7e4aa",
                  "name": "Light Lime",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9675"
                },
                {
                  "color": "#bbd752",
                  "name": "Lime",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9676"
                },
                {
                  "color": "#96db92",
                  "name": "Light Green",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9677"
                },
                {
                  "color": "#4f8277",
                  "name": "Petrol Green",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9678"
                },
                {
                  "color": "#676946",
                  "name": "Army Green",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9679"
                },
                {
                  "color": "#4eb776",
                  "name": "Dark Green",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9680"
                },
                {
                  "color": "#7fbe6b",
                  "name": "Dusty Green",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9681"
                },
                {
                  "color": "#60d8bc",
                  "name": "Mint",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9682"
                },
                {
                  "color": "#c0dfc5",
                  "name": "Pastel Mint",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9683"
                },
                {
                  "color": "#d7dddf",
                  "name": "Delicate Light Blue",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9684"
                },
                {
                  "color": "#bed6e2",
                  "name": "Light Blue",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9685"
                },
                {
                  "color": "#8e9da6",
                  "name": "Light Jeans Blue",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9686"
                },
                {
                  "color": "#617b92",
                  "name": "Jeans Blue",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9687"
                },
                {
                  "color": "#3a4760",
                  "name": "Navy Blue",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9688"
                },
                {
                  "color": "#457dc7",
                  "name": "Blue",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9689"
                },
                {
                  "color": "#b6cce2",
                  "name": "Baby Blue",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9690"
                },
                {
                  "color": "#15c3d4",
                  "name": "Turquoise",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9691"
                },
                {
                  "color": "#43cdd7",
                  "name": "Light Turquoise",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9692"
                },
                {
                  "color": "#01a1b0",
                  "name": "Petrol Blue",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9693"
                },
                {
                  "color": "#65405f",
                  "name": "Aubergine",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9694"
                },
                {
                  "color": "#5a3d84",
                  "name": "Dark Purple",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9695"
                },
                {
                  "color": "#8277c8",
                  "name": "Lavender",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9696"
                },
                {
                  "color": "#a15faf",
                  "name": "Purple",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9697"
                },
                {
                  "color": "#cd95c6",
                  "name": "Light Purple",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9698"
                },
                {
                  "color": "#eed7e7",
                  "name": "Pastel Purple",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9699"
                },
                {
                  "color": "#eedbdd",
                  "name": "Pastel Pink",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9700"
                },
                {
                  "color": "#fdd1d2",
                  "name": "Baby Pink",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9701"
                },
                {
                  "color": "#ffb3d0",
                  "name": "Rose",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9702"
                },
                {
                  "color": "#f265a2",
                  "name": "Pink",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9703"
                },
                {
                  "color": "#e7b2ab",
                  "name": "Old Rose",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9704"
                },
                {
                  "color": "#cd5d65",
                  "name": "Dark Old Rose",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9705"
                },
                {
                  "color": "#e8bdaa",
                  "name": "Light Peach",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9706"
                },
                {
                  "color": "#f7a262",
                  "name": "Peach",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9707"
                },
                {
                  "color": "#f38f9a",
                  "name": "Light Coral",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9708"
                },
                {
                  "color": "#e85c66",
                  "name": "Coral",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9709"
                },
                {
                  "color": "#f2e6ce",
                  "name": "Vanilla",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9710"
                },
                {
                  "color": "#f2e2a4",
                  "name": "Pastel Yellow",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9711"
                },
                {
                  "color": "#f9e43e",
                  "name": "Yellow",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9712"
                },
                {
                  "color": "#fbcb2f",
                  "name": "Sunny Yellow",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9713"
                },
                {
                  "color": "#e0bf1f",
                  "name": "Curry",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9714"
                },
                {
                  "color": "#e96405",
                  "name": "Orange",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9715"
                },
                {
                  "color": "#e6262e",
                  "name": "Red",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9716"
                },
                {
                  "color": "#c00e33",
                  "name": "Dark Red",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9717"
                },
                {
                  "color": "#702135",
                  "name": "Bordeaux",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=9718"
                },
                {
                  "color": "#f7c0d8",
                  "name": "Antique Rose",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12251"
                },
                {
                  "color": "#fb7fb2",
                  "name": "Light Pink",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12252"
                },
                {
                  "color": "#e1887c",
                  "name": "Powder Rose",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12253"
                },
                {
                  "color": "#ab4147",
                  "name": "Dark Powder Rose",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12254"
                },
                {
                  "color": "#fdcaa3",
                  "name": "Apricot",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12255"
                },
                {
                  "color": "#f87c43",
                  "name": "Burnt Orange",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12256"
                },
                {
                  "color": "#ddb6d9",
                  "name": "Baby Purple",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12257"
                },
                {
                  "color": "#b573be",
                  "name": "Dusty Purple",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12258"
                },
                {
                  "color": "#cb718b",
                  "name": "Lilac",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12259"
                },
                {
                  "color": "#729de9",
                  "name": "Blue Sky",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12260"
                },
                {
                  "color": "#a3b4ef",
                  "name": "Light Sky Blue",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12261"
                },
                {
                  "color": "#b39d4a",
                  "name": "Olive",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12262"
                },
                {
                  "color": "#dcd2cf",
                  "name": "Pearl Gray",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12263"
                },
                {
                  "color": "#dee76d",
                  "name": "Dusty Lime",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12264"
                },
                {
                  "color": "#dae48d",
                  "name": "Dusty Light Green",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12265"
                },
                {
                  "color": "#495ebe",
                  "name": "Royal Blue",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12266"
                },
                {
                  "color": "#47a8b2",
                  "name": "Light Petrol Blue",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12267"
                },
                {
                  "color": "#64a2b9",
                  "name": "Steel Blue",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12268"
                },
                {
                  "color": "#8eb5c5",
                  "name": "Dusty Blue Green",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12269"
                },
                {
                  "color": "#ae6280",
                  "name": "Plum",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12270"
                },
                {
                  "color": "#fbdb57",
                  "name": "Ochre Yellow",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12271"
                },
                {
                  "color": "#ba2662",
                  "name": "Cerise",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12272"
                },
                {
                  "color": "#94c542",
                  "name": "Green",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12273"
                },
                {
                  "color": "#09b5b0",
                  "name": "Dark Mint",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12274"
                },
                {
                  "color": "#b0283e",
                  "name": "Christmas Red",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12275"
                },
                {
                  "color": "#f4367f",
                  "name": "Petunia Pink",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12276"
                },
                {
                  "color": "#eda675",
                  "name": "Toffee",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12277"
                },
                {
                  "color": "#f9e3cb",
                  "name": "Almond",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12278"
                },
                {
                  "color": "#fec312",
                  "name": "Egg Yolk",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12279"
                },
                {
                  "color": "#137b93",
                  "name": "Dark Teal",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12280"
                },
                {
                  "color": "#2f496e",
                  "name": "Prussian Blue",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12281"
                },
                {
                  "color": "#f7c4df",
                  "name": "Candyfloss",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12282"
                },
                {
                  "color": "#b29bcb",
                  "name": "Wisteria",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12283"
                },
                {
                  "color": "#433a72",
                  "name": "Indigo",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12284"
                },
                {
                  "color": "#373f8a",
                  "name": "Cobalt Blue",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12285"
                },
                {
                  "color": "#eae7e4",
                  "name": "Mist",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12286"
                },
                {
                  "color": "#84ac95",
                  "name": "Sage Green",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12287"
                },
                {
                  "color": "#119676",
                  "name": "Malachite Green",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12288"
                },
                {
                  "color": "#356257",
                  "name": "Deep Jungle Green",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12289"
                },
                {
                  "color": "#c15731",
                  "name": "Rust",
                  "url": "https://hobbii.com/rainbow-cotton-8-8?option=12290"
                }
              ]
            }
          ],
          "name": "Rainbow Cotton 8/8",
          "id": "rainbow_cotton_8_8"
        }
      ]
    },
    {
      "name": "Hobby Lobby",
      "id": "hobby_lobby",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "hobbylobby.com",
                "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/I-Love-This-Yarn/p/YN20120",
                "accessed": "2023-01-30"
              },
              "colors": [
                {
                  "color": "#dcdbde",
                  "name": "White",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/White-I-Love-This-Yarn/p/35682"
                },
                {
                  "color": "#dd84a7",
                  "name": "Pink",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Pink-I-Love-This-Yarn/p/35879"
                },
                {
                  "color": "#c09493",
                  "name": "Rosy Cheeks",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Rosy-Cheeks-I-Love-This-Yarn/p/36658"
                },
                {
                  "color": "#dfbabc",
                  "name": "Soft Pink",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Soft-Pink-I-Love-This-Yarn/p/36020"
                },
                {
                  "color": "#4a5c61",
                  "name": "Antique Teal",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Antique-Teal-I-Love-This-Yarn/p/36109"
                },
                {
                  "color": "#5dabaf",
                  "name": "Turquoise",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Turquoise-I-Love-This-Yarn/p/35880"
                },
                {
                  "color": "#c564a2",
                  "name": "Hot Orchid",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Hot-Orchid-I-Love-This-Yarn/p/139108"
                },
                {
                  "color": "#92beaf",
                  "name": "Ocean",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Ocean-I-Love-This-Yarn/p/139109"
                },
                {
                  "color": "#e46d5a",
                  "name": "Mango",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Mango-I-Love-This-Yarn/p/139110"
                },
                {
                  "color": "#99a39e",
                  "name": "Spa",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Spa-I-Love-This-Yarn/p/81040492"
                },
                {
                  "color": "#748aac",
                  "name": "Medium Blue",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Medium-Blue-I-Love-This-Yarn/p/35881"
                },
                {
                  "color": "#575947",
                  "name": "Dark Olive",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Dark-Olive-I-Love-This-Yarn/p/35882"
                },
                {
                  "color": "#90ad7b",
                  "name": "Mid Green",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Mid-Green-I-Love-This-Yarn/p/35907"
                },
                {
                  "color": "#c98b6e",
                  "name": "Toasted Almond",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Toasted-Almond-I-Love-This-Yarn/p/35906"
                },
                {
                  "color": "#ab4844",
                  "name": "Terra Cotta",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Terra-Cotta-I-Love-This-Yarn/p/36105"
                },
                {
                  "color": "#e26040",
                  "name": "Burnt Pumpkin",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Burnt-Pumpkin-I-Love-This-Yarn/p/36106"
                },
                {
                  "color": "#e69c47",
                  "name": "Sungold",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Sungold-I-Love-This-Yarn/p/36107"
                },
                {
                  "color": "#74544b",
                  "name": "Brown",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Brown-I-Love-This-Yarn/p/35883"
                },
                {
                  "color": "#466354",
                  "name": "Forest Green",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Forest-Green-I-Love-This-Yarn/p/35885"
                },
                {
                  "color": "#429a68",
                  "name": "Jelly Bean",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Jelly-Bean-I-Love-This-Yarn/p/37140"
                },
                {
                  "color": "#d9d8d6",
                  "name": "Light Gray",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Light-Gray-I-Love-This-Yarn/p/35887"
                },
                {
                  "color": "#d9d1bb",
                  "name": "Ivory",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Ivory-I-Love-This-Yarn/p/35683"
                },
                {
                  "color": "#b8b7b9",
                  "name": "Gray Mist",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Gray-Mist-I-Love-This-Yarn/p/35888"
                },
                {
                  "color": "#a29794",
                  "name": "Grey Bearn",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Grey-Beard-I-Love-This-Yarn/p/36653"
                },
                {
                  "color": "#cccbcc",
                  "name": "Antique White",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Antique-White-I-Love-This-Yarn/p/35912"
                },
                {
                  "color": "#5e4d48",
                  "name": "Coffee",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Coffee-I-Love-This-Yarn/p/35889"
                },
                {
                  "color": "#e5b094",
                  "name": "Light Peach",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Light-Peach-I-Love-This-Yarn/p/35946"
                },
                {
                  "color": "#da5651",
                  "name": "Orange",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Orange-I-Love-This-Yarn/p/36021"
                },
                {
                  "color": "#c1b3a6",
                  "name": "Linen",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Linen-I-Love-This-Yarn/p/35905"
                },
                {
                  "color": "#595f6f",
                  "name": "Dark Country Blue",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Dark-Country-Blue-I-Love-This-Yarn/p/35890"
                },
                {
                  "color": "#949f73",
                  "name": "Light Sage",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Light-Sage-I-Love-This-Yarn/p/35908"
                },
                {
                  "color": "#b04649",
                  "name": "Fire Red",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Fire-Red-I-Love-This-Yarn/p/35910"
                },
                {
                  "color": "#9497c9",
                  "name": "Periwinkle",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Periwinkle-I-Love-This-Yarn/p/35945"
                },
                {
                  "color": "#cfbedd",
                  "name": "Orchid",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Orchid-I-Love-This-Yarn/p/35942"
                },
                {
                  "color": "#a27db4",
                  "name": "Amethyst",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Amethyst-I-Love-This-Yarn/p/36654"
                },
                {
                  "color": "#634e64",
                  "name": "Purple",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Purple-I-Love-This-Yarn/p/36656"
                },
                {
                  "color": "#804b6c",
                  "name": "Mixed Berry",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Mixed-Berry-I-Love-This-Yarn/p/37139"
                },
                {
                  "color": "#4b4b4b",
                  "name": "Black",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Black-I-Love-This-Yarn/p/35684"
                },
                {
                  "color": "#685799",
                  "name": "Grape",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Grape-I-Love-This-Yarn/p/35943"
                },
                {
                  "color": "#488a98",
                  "name": "Peacock",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Peacock-I-Love-This-Yarn/p/35944"
                },
                {
                  "color": "#7ba2ac",
                  "name": "Sea Blue",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Sea-Blue-I-Love-This-Yarn/p/35909"
                },
                {
                  "color": "#feca48",
                  "name": "Yellow",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Yellow-I-Love-This-Yarn/p/35911"
                },
                {
                  "color": "#fce9bc",
                  "name": "Buttercup",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Buttercup-I-Love-This-Yarn/p/35913"
                },
                {
                  "color": "#b94573",
                  "name": "Hot Rose",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Hot-Rose-I-Love-This-Yarn/p/35886"
                },
                {
                  "color": "#c9e2cd",
                  "name": "Menthe",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Menthe-I-Love-This-Yarn/p/96097"
                },
                {
                  "color": "#dc4d66",
                  "name": "Tropical Pink",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Tropical-Pink-I-Love-This-Yarn/p/43418"
                },
                {
                  "color": "#f98c4c",
                  "name": "Desert Glaze",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Desert-Glaze-I-Love-This-Yarn/p/96092"
                },
                {
                  "color": "#bebe41",
                  "name": "Keylime",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Keylime-I-Love-This-Yarn/p/96093"
                },
                {
                  "color": "#fae9c4",
                  "name": "Lemon Ice",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Lemon-Ice-I-Love-This-Yarn/p/41834"
                },
                {
                  "color": "#a4b0b0",
                  "name": "Arctic Ice",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Arctic-Ice-I-Love-This-Yarn/p/43414"
                },
                {
                  "color": "#95a7a3",
                  "name": "Glacier",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Glacier-I-Love-This-Yarn/p/43431"
                },
                {
                  "color": "#665a5a",
                  "name": "Graphite",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Graphite-I-Love-This-Yarn/p/96094"
                },
                {
                  "color": "#934245",
                  "name": "Red",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Red-I-Love-This-Yarn/p/35685"
                },
                {
                  "color": "#694546",
                  "name": "Cranberry",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Cranberry-I-Love-This-Yarn/p/35686"
                },
                {
                  "color": "#6b464b",
                  "name": "Aubergine",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Aubergine-I-Love-This-Yarn/p/35687"
                },
                {
                  "color": "#93bbd5",
                  "name": "Soft Blue",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Soft-Blue-I-Love-This-Yarn/p/35688"
                },
                {
                  "color": "#5C3821",
                  "name": "Cinnamon",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Cinnamon-I-Love-This-Yarn/p/81087755"
                },
                {
                  "color": "#BB8759",
                  "name": "Late",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Latte-I-Love-This-Yarn/p/81087763"
                },
                {
                  "color": "#3F484C",
                  "name": "Blue Spruce",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Blue-Spruce-I-Love-This-Yarn/p/81087766"
                },
                {
                  "color": "#514D3D",
                  "name": "Clover",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Clover%C2%A0I-Love-This-Yarn/p/81087767"
                },
                {
                  "color": "#D59D85",
                  "name": "Cherry Blossom",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Cherry-Blossom-I-Love-This-Yarn/p/81087768"
                },
                {
                  "color": "#97da4a",
                  "name": "Limelight",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Limelight-I-Love-This-Yarn/p/36446"
                },
                {
                  "color": "#fae7c8",
                  "name": "Cream",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Cream-I-Love-This-Yarn/p/36651"
                },
                {
                  "color": "#d1aa81",
                  "name": "Light Taupe",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Light-Taupe-I-Love-This-Yarn/p/36655"
                },
                {
                  "color": "#4b5882",
                  "name": "Royal",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Royal-I-Love-This-Yarn/p/35689"
                },
                {
                  "color": "#525360",
                  "name": "Navy",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Navy-I-Love-This-Yarn/p/35690"
                },
                {
                  "color": "#ff4179",
                  "name": "Pink Neon",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Pink-Neon-I-Love-This-Yarn/p/96083"
                },
                {
                  "color": "#ff6c47",
                  "name": "Orange Neon",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Orange-Neon-I-Love-This-Yarn/p/96085"
                },
                {
                  "color": "#6e819b",
                  "name": "Stonewash",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Stonewash-I-Love-This-Yarn/p/37073"
                },
                {
                  "color": "#4f5158",
                  "name": "Dark Denim",
                  "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Dark-Denim-I-Love-This-Yarn/p/37074"
                }
              ]
            }
          ],
          "name": "I Love This Yarn",
          "id": "i_love_this_yarn"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "hobbylobby.com",
                "url": "https://www.hobbylobby.com/Yarn-Needle-Art/Yarn/Yarn-Bee-Soft-Sleek-Yarn/p/SS42114",
                "accessed": "2023-02-13"
              },
              "colors": [
                {
                  "color": "#080707",
                  "name": "Black"
                },
                {
                  "color": "#F0F0ED",
                  "name": "White"
                },
                {
                  "color": "#EDE5D8",
                  "name": "Ivory"
                },
                {
                  "color": "#92766B",
                  "name": "Brownie"
                },
                {
                  "color": "#B19C8E",
                  "name": "Linen"
                },
                {
                  "color": "#B2A18D",
                  "name": "Oatmeal"
                },
                {
                  "color": "#7D4B2A",
                  "name": "Tobacco"
                },
                {
                  "color": "#E3E0DB",
                  "name": "Light Gray"
                },
                {
                  "color": "#79CAC6",
                  "name": "Aqua"
                },
                {
                  "color": "#A0A390",
                  "name": "Sage"
                },
                {
                  "color": "#888F8B",
                  "name": "Viridescent"
                },
                {
                  "color": "#6D7B47",
                  "name": "Kale"
                },
                {
                  "color": "#AF983E",
                  "name": "Green Apple"
                },
                {
                  "color": "#3C3A2C",
                  "name": "Olive"
                },
                {
                  "color": "#367290",
                  "name": "Teal Green"
                },
                {
                  "color": "#BBB9BD",
                  "name": "Silver Gray"
                },
                {
                  "color": "#777172",
                  "name": "Dark Gray"
                },
                {
                  "color": "#758188",
                  "name": "Crisp Air"
                },
                {
                  "color": "#181731",
                  "name": "Navy"
                },
                {
                  "color": "#C6DAE2",
                  "name": "Light Blue"
                },
                {
                  "color": "#346C93",
                  "name": "Teal Blue"
                },
                {
                  "color": "#2F2D2F",
                  "name": "Dark Heather Gray"
                },
                {
                  "color": "#51425A",
                  "name": "Purple"
                },
                {
                  "color": "#644C52",
                  "name": "French Lilac"
                },
                {
                  "color": "#766877",
                  "name": "Purple Haze"
                },
                {
                  "color": "#3F222F",
                  "name": "Plum"
                },
                {
                  "color": "#982123",
                  "name": "Red"
                },
                {
                  "color": "#5D212B",
                  "name": "Burgundy"
                },
                {
                  "color": "#841D23",
                  "name": "Chili Red"
                },
                {
                  "color": "#9F5346",
                  "name": "Spice"
                },
                {
                  "color": "#CDAFA4",
                  "name": "Blush"
                },
                {
                  "color": "#B8726F",
                  "name": "Mauve"
                },
                {
                  "color": "#E7C3BA",
                  "name": "Soft Pink"
                },
                {
                  "color": "#D22D5B",
                  "name": "Hot Pink"
                },
                {
                  "color": "#8B6250",
                  "name": "Clay"
                },
                {
                  "color": "#833F2E",
                  "name": "Bruschetta"
                },
                {
                  "color": "#F3D17D",
                  "name": "Pale Yellow"
                },
                {
                  "color": "#B39465",
                  "name": "Wheat"
                },
                {
                  "color": "#C6903E",
                  "name": "Mustard"
                },
                {
                  "color": "#C7672B",
                  "name": "Pumpkin Spice"
                },
                {
                  "color": "#667483",
                  "name": "Denim Blues"
                },
                {
                  "color": "#8A8389",
                  "name": "Purple & Gray Multi"
                },
                {
                  "color": "#6A4C5F",
                  "name": "Berry Mix"
                },
                {
                  "color": "#5E3B38",
                  "name": "Blushy"
                },
                {
                  "color": "#82665F",
                  "name": "Auburn Delight"
                }
              ]
            }
          ],
          "name": "Yarn Bee Soft & Sleek",
          "id": "yarn_bee_soft_and_sleek"
        }
      ]
    },
    {
      "name": "Knit Picks",
      "id": "knit_picks",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "knitpicks.com",
                "url": "https://www.knitpicks.com/yarn/brava-worsted/c/5420219",
                "accessed": "2023-01-16"
              },
              "colors": [
                {
                  "color": "#173d7c",
                  "name": "Celestial"
                },
                {
                  "color": "#dcebf0",
                  "name": "Clarity"
                },
                {
                  "color": "#6188ac",
                  "name": "Denim"
                },
                {
                  "color": "#cbe4f2",
                  "name": "Sky"
                },
                {
                  "color": "#122858",
                  "name": "Solstice Heather"
                },
                {
                  "color": "#49b6ca",
                  "name": "Cornflower"
                },
                {
                  "color": "#0497a4",
                  "name": "Marina"
                },
                {
                  "color": "#297076",
                  "name": "Tidepool"
                },
                {
                  "color": "#61bfb0",
                  "name": "Tranquil"
                },
                {
                  "color": "#b3d595",
                  "name": "Alfalfa"
                },
                {
                  "color": "#989d3c",
                  "name": "Avocado"
                },
                {
                  "color": "#3d4c31",
                  "name": "Dublin"
                },
                {
                  "color": "#b8a672",
                  "name": "Fig"
                },
                {
                  "color": "#3e9a66",
                  "name": "Grass"
                },
                {
                  "color": "#0c3c3f",
                  "name": "Hunter"
                },
                {
                  "color": "#c0ded0",
                  "name": "Mint"
                },
                {
                  "color": "#7da951",
                  "name": "Peapod"
                },
                {
                  "color": "#f9c54c",
                  "name": "Canary"
                },
                {
                  "color": "#ea9d41",
                  "name": "Caution"
                },
                {
                  "color": "#e6c698",
                  "name": "Custard"
                },
                {
                  "color": "#ed6f41",
                  "name": "Orange"
                },
                {
                  "color": "#bb402f",
                  "name": "Paprika"
                },
                {
                  "color": "#a75143",
                  "name": "Persimmon"
                },
                {
                  "color": "#f2b2ac",
                  "name": "Seashell"
                },
                {
                  "color": "#44171b",
                  "name": "Currant"
                },
                {
                  "color": "#d02b4b",
                  "name": "Red"
                },
                {
                  "color": "#651922",
                  "name": "Wine"
                },
                {
                  "color": "#ecd4da",
                  "name": "Blush"
                },
                {
                  "color": "#d75963",
                  "name": "Coral"
                },
                {
                  "color": "#f0afc3",
                  "name": "Cotton Candy"
                },
                {
                  "color": "#6b2857",
                  "name": "Fairy Tale"
                },
                {
                  "color": "#a763a2",
                  "name": "Lady Slipper"
                },
                {
                  "color": "#e74e7e",
                  "name": "Rouge"
                },
                {
                  "color": "#301241",
                  "name": "Eggplant"
                },
                {
                  "color": "#8e61a5",
                  "name": "Freesia"
                },
                {
                  "color": "#572a57",
                  "name": "Mulberry"
                },
                {
                  "color": "#a88f9d",
                  "name": "Seraphim"
                },
                {
                  "color": "#c2977a",
                  "name": "Almond"
                },
                {
                  "color": "#a5663b",
                  "name": "Brindle"
                },
                {
                  "color": "#7b513b",
                  "name": "Espresso"
                },
                {
                  "color": "#9d522f",
                  "name": "Gingerbread"
                },
                {
                  "color": "#43221f",
                  "name": "Sienna"
                },
                {
                  "color": "#2c2d2f",
                  "name": "Asphalt Heather"
                },
                {
                  "color": "#272529",
                  "name": "Black"
                },
                {
                  "color": "#2e1f16",
                  "name": "Carob"
                },
                {
                  "color": "#555b5d",
                  "name": "Cobblestone Heather"
                },
                {
                  "color": "#cccdd1",
                  "name": "Dove Heather"
                },
                {
                  "color": "#7a7f86",
                  "name": "Silver"
                },
                {
                  "color": "#cdb19b",
                  "name": "Cream"
                },
                {
                  "color": "#ececed",
                  "name": "White"
                }
              ]
            }
          ],
          "name": "Brava Worsted",
          "id": "brava_worsted"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "knitpicks.com",
                "url": "https://www.knitpicks.com/yarn/mighty-stitch/c/5420287",
                "accessed": "2022-03-19"
              },
              "colors": [
                {
                  "color": "#303d85",
                  "name": "Celestial"
                },
                {
                  "color": "#2789c1",
                  "name": "Gulfstream"
                },
                {
                  "color": "#272d4b",
                  "name": "Navy"
                },
                {
                  "color": "#a6cbde",
                  "name": "Sky"
                },
                {
                  "color": "#23888c",
                  "name": "Marina"
                },
                {
                  "color": "#396066",
                  "name": "Spruce"
                },
                {
                  "color": "#8dac57",
                  "name": "Alfalfa"
                },
                {
                  "color": "#445846",
                  "name": "Ivy"
                },
                {
                  "color": "#3c9458",
                  "name": "Macaw"
                },
                {
                  "color": "#a2c2bb",
                  "name": "Mint"
                },
                {
                  "color": "#ecc837",
                  "name": "Canary"
                },
                {
                  "color": "#e7be38",
                  "name": "Sunflower"
                },
                {
                  "color": "#cf6033",
                  "name": "Orange"
                },
                {
                  "color": "#d35f2d",
                  "name": "Satsuma"
                },
                {
                  "color": "#ae2631",
                  "name": "Love Letter"
                },
                {
                  "color": "#b72c35",
                  "name": "Serrano"
                },
                {
                  "color": "#e6ccd2",
                  "name": "Blush"
                },
                {
                  "color": "#b93169",
                  "name": "Bubblegum"
                },
                {
                  "color": "#df383b",
                  "name": "Fruit Punch"
                },
                {
                  "color": "#c2378e",
                  "name": "Pucker"
                },
                {
                  "color": "#3d276a",
                  "name": "Eggplant"
                },
                {
                  "color": "#782155",
                  "name": "Fairy Tale"
                },
                {
                  "color": "#4f325e",
                  "name": "Mulberry"
                },
                {
                  "color": "#b0adc9",
                  "name": "Wisteria"
                },
                {
                  "color": "#523e3b",
                  "name": "Bark"
                },
                {
                  "color": "#795d45",
                  "name": "Chocolate"
                },
                {
                  "color": "#6c7075",
                  "name": "Ash"
                },
                {
                  "color": "#212329",
                  "name": "Black"
                },
                {
                  "color": "#bdbbc1",
                  "name": "Silver"
                },
                {
                  "color": "#e2decd",
                  "name": "Cream"
                },
                {
                  "color": "#d9cab7",
                  "name": "Oyster"
                },
                {
                  "color": "#e9e5da",
                  "name": "White"
                }
              ]
            }
          ],
          "name": "Mighty Stitch",
          "id": "mighty_stitch"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "knitpicks.com",
                "url": "https://www.knitpicks.com/yarn/shine-sport/c/5420122",
                "accessed": "2022-03-20"
              },
              "colors": [
                {
                  "color": "#e0e8f3",
                  "name": "Clarity"
                },
                {
                  "color": "#2465a4",
                  "name": "French Blue"
                },
                {
                  "color": "#20314e",
                  "name": "Sailor"
                },
                {
                  "color": "#98bfe0",
                  "name": "Sky"
                },
                {
                  "color": "#68b3b8",
                  "name": "Reef"
                },
                {
                  "color": "#c7d59a",
                  "name": "Green Apple"
                },
                {
                  "color": "#499257",
                  "name": "Macaw"
                },
                {
                  "color": "#8ea567",
                  "name": "Peapod"
                },
                {
                  "color": "#9dc8ae",
                  "name": "Pistachio"
                },
                {
                  "color": "#efcf49",
                  "name": "Dandelion"
                },
                {
                  "color": "#d35c49",
                  "name": "Grapefruit"
                },
                {
                  "color": "#c68043",
                  "name": "Sweet Potato"
                },
                {
                  "color": "#461e2a",
                  "name": "Currant"
                },
                {
                  "color": "#a62536",
                  "name": "Serrano"
                },
                {
                  "color": "#e7bfcb",
                  "name": "Blush"
                },
                {
                  "color": "#b72f7d",
                  "name": "Cosmopolitan"
                },
                {
                  "color": "#975493",
                  "name": "Crocus"
                },
                {
                  "color": "#99a0ca",
                  "name": "Hydrangea"
                },
                {
                  "color": "#503879",
                  "name": "Iris"
                },
                {
                  "color": "#2b2b64",
                  "name": "Pageant"
                },
                {
                  "color": "#431e43",
                  "name": "Serenade"
                },
                {
                  "color": "#b1b0c1",
                  "name": "Wisteria"
                },
                {
                  "color": "#4d3833",
                  "name": "Coffee"
                },
                {
                  "color": "#c9b493",
                  "name": "Willow"
                },
                {
                  "color": "#232125",
                  "name": "Black"
                },
                {
                  "color": "#c4beb0",
                  "name": "Platinum"
                },
                {
                  "color": "#a8a5a3",
                  "name": "Robot"
                },
                {
                  "color": "#69655a",
                  "name": "Wallaby"
                },
                {
                  "color": "#ece3d6",
                  "name": "Cream"
                },
                {
                  "color": "#e1ddde",
                  "name": "White"
                }
              ]
            }
          ],
          "name": "Shine Sport",
          "id": "shine_sport"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "knitpicks.com",
                "url": "https://www.knitpicks.com/yarn/swish-bulky/c/5420176",
                "accessed": "2023-01-16"
              },
              "colors": [
                {
                  "color": "#877e90",
                  "name": "Haze Heather"
                },
                {
                  "color": "#223148",
                  "name": "Delft Heather"
                },
                {
                  "color": "#044565",
                  "name": "Marine Heather"
                },
                {
                  "color": "#39666a",
                  "name": "Estuary Heather"
                },
                {
                  "color": "#143e42",
                  "name": "Rainforest Heather"
                },
                {
                  "color": "#293a2b",
                  "name": "Dublin"
                },
                {
                  "color": "#b47d32",
                  "name": "Honey"
                },
                {
                  "color": "#833a25",
                  "name": "Allspice"
                },
                {
                  "color": "#471d15",
                  "name": "Copper"
                },
                {
                  "color": "#531e26",
                  "name": "Garnet Heather"
                },
                {
                  "color": "#7f1e20",
                  "name": "Serrano"
                },
                {
                  "color": "#b26b74",
                  "name": "Blossom Heather"
                },
                {
                  "color": "#5b355e",
                  "name": "Amethyst Heather"
                },
                {
                  "color": "#3c302a",
                  "name": "Loam Heather"
                },
                {
                  "color": "#332318",
                  "name": "Pinecone Heather"
                },
                {
                  "color": "#756c6b",
                  "name": "Squirrel Heather"
                },
                {
                  "color": "#1b1b1c",
                  "name": "Black"
                },
                {
                  "color": "#4d5258",
                  "name": "Cobblestone Heather"
                },
                {
                  "color": "#898983",
                  "name": "Dove Heather"
                },
                {
                  "color": "#b6a99c",
                  "name": "Nutmeg Heather"
                },
                {
                  "color": "#d5d0c3",
                  "name": "White"
                }
              ]
            }
          ],
          "name": "Swish Bulky",
          "id": "swish_bulky"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "knitpicks.com",
                "url": "https://www.knitpicks.com/yarn/swish-dk/c/5420168",
                "accessed": "2023-01-16"
              },
              "colors": [
                {
                  "color": "#98bbcc",
                  "name": "Arctic"
                },
                {
                  "color": "#424baa",
                  "name": "Bluebird"
                },
                {
                  "color": "#3d4362",
                  "name": "Delft Heather"
                },
                {
                  "color": "#1e2651",
                  "name": "Dusk"
                },
                {
                  "color": "#1b6faa",
                  "name": "Gulfstream"
                },
                {
                  "color": "#1f1f3f",
                  "name": "Mimic"
                },
                {
                  "color": "#4c6ed3",
                  "name": "Serene"
                },
                {
                  "color": "#a4c3c2",
                  "name": "Wonderland Heather"
                },
                {
                  "color": "#2b7b82",
                  "name": "Marina"
                },
                {
                  "color": "#1e486c",
                  "name": "Marine Heather"
                },
                {
                  "color": "#314142",
                  "name": "Rainforest Heather"
                },
                {
                  "color": "#3f4c3c",
                  "name": "Forest Heather"
                },
                {
                  "color": "#bdc38c",
                  "name": "Green Tea Heather"
                },
                {
                  "color": "#4d5144",
                  "name": "Lost Lake Heather"
                },
                {
                  "color": "#504e33",
                  "name": "Moss"
                },
                {
                  "color": "#94b468",
                  "name": "Peapod"
                },
                {
                  "color": "#cfa451",
                  "name": "Honey"
                },
                {
                  "color": "#a65131",
                  "name": "Allspice"
                },
                {
                  "color": "#cf7a4a",
                  "name": "Clementine"
                },
                {
                  "color": "#5e222a",
                  "name": "Garnet Heather"
                },
                {
                  "color": "#6f212e",
                  "name": "Hollyberry"
                },
                {
                  "color": "#ac2c35",
                  "name": "Serrano"
                },
                {
                  "color": "#d08590",
                  "name": "Blossom Heather"
                },
                {
                  "color": "#cd7466",
                  "name": "Conch"
                },
                {
                  "color": "#cc2d6b",
                  "name": "Crush"
                },
                {
                  "color": "#dfb5b5",
                  "name": "Frosting"
                },
                {
                  "color": "#8d3671",
                  "name": "Karma Heather"
                },
                {
                  "color": "#ac3f52",
                  "name": "Rose Heather"
                },
                {
                  "color": "#90125d",
                  "name": "Throne"
                },
                {
                  "color": "#4f2b53",
                  "name": "Amethyst Heather"
                },
                {
                  "color": "#442e55",
                  "name": "Eggplant"
                },
                {
                  "color": "#aa9eb3",
                  "name": "Haze Heather"
                },
                {
                  "color": "#2e263b",
                  "name": "Indigo Heather"
                },
                {
                  "color": "#362a24",
                  "name": "Loam Heather"
                },
                {
                  "color": "#573e26",
                  "name": "Pinecone Heather"
                },
                {
                  "color": "#908375",
                  "name": "Squirrel Heather"
                },
                {
                  "color": "#272629",
                  "name": "Black"
                },
                {
                  "color": "#4e4f51",
                  "name": "Cobblestone Heather"
                },
                {
                  "color": "#b3b2b2",
                  "name": "Dove Heather"
                },
                {
                  "color": "#72707a",
                  "name": "Marble Heather"
                },
                {
                  "color": "#c9b9a6",
                  "name": "Nutmeg Heather"
                },
                {
                  "color": "#e9e4e3",
                  "name": "White"
                }
              ]
            }
          ],
          "name": "Swish DK",
          "id": "swish_dk"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "knitpicks.com",
                "url": "https://www.knitpicks.com/yarn/swish-worsted/c/5420153",
                "accessed": "2023-01-16"
              },
              "colors": [
                {
                  "color": "#b4cfdf",
                  "name": "Arctic"
                },
                {
                  "color": "#383d8c",
                  "name": "Bluebird"
                },
                {
                  "color": "#323852",
                  "name": "Delft Heather"
                },
                {
                  "color": "#1f2c5a",
                  "name": "Dusk"
                },
                {
                  "color": "#669cc3",
                  "name": "Electric Blue"
                },
                {
                  "color": "#1772ad",
                  "name": "Gulfstream"
                },
                {
                  "color": "#242443",
                  "name": "Mimic"
                },
                {
                  "color": "#3f5ab6",
                  "name": "Serene"
                },
                {
                  "color": "#0b6672",
                  "name": "Voyage Heather"
                },
                {
                  "color": "#9ebcbd",
                  "name": "Wonderland Heather"
                },
                {
                  "color": "#4a8590",
                  "name": "Estuary Heather"
                },
                {
                  "color": "#1a3d59",
                  "name": "Marine Heather"
                },
                {
                  "color": "#366a6a",
                  "name": "Rainforest Heather"
                },
                {
                  "color": "#4e5d40",
                  "name": "Dublin"
                },
                {
                  "color": "#b6b56c",
                  "name": "Green Tea Heather"
                },
                {
                  "color": "#281b17",
                  "name": "Loam Heather"
                },
                {
                  "color": "#3f4038",
                  "name": "Lost Lake Heather"
                },
                {
                  "color": "#97b75e",
                  "name": "Peapod"
                },
                {
                  "color": "#947b32",
                  "name": "Haystack Heather"
                },
                {
                  "color": "#cfda6f",
                  "name": "Highlighter Yellow"
                },
                {
                  "color": "#d6ae4f",
                  "name": "Honey"
                },
                {
                  "color": "#ad5931",
                  "name": "Allspice"
                },
                {
                  "color": "#d7804c",
                  "name": "Clementine"
                },
                {
                  "color": "#743a2a",
                  "name": "Copper"
                },
                {
                  "color": "#511e23",
                  "name": "Garnet Heather"
                },
                {
                  "color": "#71222c",
                  "name": "Hollyberry"
                },
                {
                  "color": "#a52732",
                  "name": "Serrano"
                },
                {
                  "color": "#e19aa4",
                  "name": "Blossom Heather"
                },
                {
                  "color": "#cb7266",
                  "name": "Conch"
                },
                {
                  "color": "#cc2a71",
                  "name": "Crush"
                },
                {
                  "color": "#e9c4c3",
                  "name": "Frosting"
                },
                {
                  "color": "#9d4077",
                  "name": "Karma Heather"
                },
                {
                  "color": "#c82f8d",
                  "name": "Pucker"
                },
                {
                  "color": "#b34156",
                  "name": "Rose Heather"
                },
                {
                  "color": "#a31d6d",
                  "name": "Throne"
                },
                {
                  "color": "#553156",
                  "name": "Amethyst Heather"
                },
                {
                  "color": "#30203e",
                  "name": "Eggplant"
                },
                {
                  "color": "#ac9fb4",
                  "name": "Haze Heather"
                },
                {
                  "color": "#3b304a",
                  "name": "Indigo Heather"
                },
                {
                  "color": "#5c4127",
                  "name": "Pinecone Heather"
                },
                {
                  "color": "#8b8079",
                  "name": "Squirrel Heather"
                },
                {
                  "color": "#232122",
                  "name": "Black"
                },
                {
                  "color": "#4d4d4e",
                  "name": "Cobblestone Heather"
                },
                {
                  "color": "#c0c4bb",
                  "name": "Dove Heather"
                },
                {
                  "color": "#646468",
                  "name": "Marble Heather"
                },
                {
                  "color": "#bfab9c",
                  "name": "Nutmeg Heather"
                },
                {
                  "color": "#e3dedd",
                  "name": "White"
                }
              ]
            }
          ],
          "name": "Swish Worsted",
          "id": "swish_worsted"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "knitpicks.com",
                "url": "https://www.knitpicks.com/yarn/wool-of-the-andes-worsted/c/5420103",
                "accessed": "2023-01-06"
              },
              "colors": [
                {
                  "color": "#384d71",
                  "name": "Arctic Pool Heather"
                },
                {
                  "color": "#46637e",
                  "name": "Baltic Heather"
                },
                {
                  "color": "#2e3e86",
                  "name": "Celestial"
                },
                {
                  "color": "#5c76a7",
                  "name": "Ciel"
                },
                {
                  "color": "#d5dee5",
                  "name": "Clarity"
                },
                {
                  "color": "#3b405f",
                  "name": "Delft Heather"
                },
                {
                  "color": "#2a2e62",
                  "name": "Depths"
                },
                {
                  "color": "#76939a",
                  "name": "Fjord Heather"
                },
                {
                  "color": "#252858",
                  "name": "Hyacinth"
                },
                {
                  "color": "#556271",
                  "name": "Icicle Heather"
                },
                {
                  "color": "#b6b9c6",
                  "name": "Lake Ice Heather"
                },
                {
                  "color": "#292f36",
                  "name": "Midnight Heather"
                },
                {
                  "color": "#058db5",
                  "name": "Ocean"
                },
                {
                  "color": "#1a1825",
                  "name": "Peacoat"
                },
                {
                  "color": "#223e61",
                  "name": "Sapphire Heather"
                },
                {
                  "color": "#2c3050",
                  "name": "Solstice Heather"
                },
                {
                  "color": "#5086ad",
                  "name": "Whirlpool"
                },
                {
                  "color": "#29406f",
                  "name": "Winter Night"
                },
                {
                  "color": "#a3c5c9",
                  "name": "Wonderland Heather"
                },
                {
                  "color": "#317185",
                  "name": "Calypso Heather"
                },
                {
                  "color": "#1a2a30",
                  "name": "Jurassic"
                },
                {
                  "color": "#258e93",
                  "name": "Marina"
                },
                {
                  "color": "#6f767c",
                  "name": "Opal Heather"
                },
                {
                  "color": "#13555b",
                  "name": "Spruce"
                },
                {
                  "color": "#62a18f",
                  "name": "Tranquil"
                },
                {
                  "color": "#99ae80",
                  "name": "Aloe Heather"
                },
                {
                  "color": "#2f4237",
                  "name": "Aurora Heather"
                },
                {
                  "color": "#83834a",
                  "name": "Bamboo Heather"
                },
                {
                  "color": "#6c6947",
                  "name": "Cilantro Heather"
                },
                {
                  "color": "#2e6a52",
                  "name": "Everglade Heather"
                },
                {
                  "color": "#3b4637",
                  "name": "Forest Heather"
                },
                {
                  "color": "#527752",
                  "name": "Grass"
                },
                {
                  "color": "#babc7a",
                  "name": "Green Tea Heather"
                },
                {
                  "color": "#3a3b30",
                  "name": "Larch Heather"
                },
                {
                  "color": "#4e5f54",
                  "name": "Noble Heather"
                },
                {
                  "color": "#817f61",
                  "name": "Pampas Heather"
                },
                {
                  "color": "#8eb159",
                  "name": "Peapod"
                },
                {
                  "color": "#685e3b",
                  "name": "Thyme"
                },
                {
                  "color": "#9f7c43",
                  "name": "Brass Heather"
                },
                {
                  "color": "#e3c92c",
                  "name": "Buttercup"
                },
                {
                  "color": "#e7af55",
                  "name": "Caution"
                },
                {
                  "color": "#e3cd8c",
                  "name": "Creme Brulee"
                },
                {
                  "color": "#79543f",
                  "name": "Amber Heather"
                },
                {
                  "color": "#ab663f",
                  "name": "Persimmon Heather"
                },
                {
                  "color": "#b27643",
                  "name": "Pumpkin"
                },
                {
                  "color": "#68362e",
                  "name": "Rooibosheather"
                },
                {
                  "color": "#d34c2f",
                  "name": "Solar Flare Heather"
                },
                {
                  "color": "#882c35",
                  "name": "Cranberry"
                },
                {
                  "color": "#9c3b3f",
                  "name": "Firecracker Heather"
                },
                {
                  "color": "#562027",
                  "name": "Garnet Heather"
                },
                {
                  "color": "#69212f",
                  "name": "Hollyberry"
                },
                {
                  "color": "#4d3329",
                  "name": "Merlot Heather"
                },
                {
                  "color": "#ae2a32",
                  "name": "Red"
                },
                {
                  "color": "#d7a1a9",
                  "name": "Blossom Heather"
                },
                {
                  "color": "#c86261",
                  "name": "Conch"
                },
                {
                  "color": "#cb2466",
                  "name": "Dragonfruit"
                },
                {
                  "color": "#9d297e",
                  "name": "Magic"
                },
                {
                  "color": "#c35d65",
                  "name": "Papaya Heather"
                },
                {
                  "color": "#cf95b9",
                  "name": "Pink Posy Heather"
                },
                {
                  "color": "#785080",
                  "name": "Amethyst Heather"
                },
                {
                  "color": "#3a2a39",
                  "name": "Blackberry"
                },
                {
                  "color": "#765455",
                  "name": "Bouquet Heather"
                },
                {
                  "color": "#4b3240",
                  "name": "Burdock Heather"
                },
                {
                  "color": "#4d3b4c",
                  "name": "Claret Heather"
                },
                {
                  "color": "#59246a",
                  "name": "Columbine"
                },
                {
                  "color": "#491e28",
                  "name": "Currant"
                },
                {
                  "color": "#9388a5",
                  "name": "Haze Heather"
                },
                {
                  "color": "#423550",
                  "name": "Indigo Heather"
                },
                {
                  "color": "#503b58",
                  "name": "Lullaby"
                },
                {
                  "color": "#4d4957",
                  "name": "Mineral Heather"
                },
                {
                  "color": "#301422",
                  "name": "Night Shade Heather"
                },
                {
                  "color": "#653b88",
                  "name": "Poet"
                },
                {
                  "color": "#6e5681",
                  "name": "Starling Heather"
                },
                {
                  "color": "#bea38d",
                  "name": "Almond"
                },
                {
                  "color": "#2a2324",
                  "name": "Bittersweet Heather"
                },
                {
                  "color": "#574e44",
                  "name": "Bramble Heather"
                },
                {
                  "color": "#907b63",
                  "name": "Camel Heather"
                },
                {
                  "color": "#644227",
                  "name": "Chestnut"
                },
                {
                  "color": "#3f2f2c",
                  "name": "Chocolate"
                },
                {
                  "color": "#504337",
                  "name": "Grizzly Heather"
                },
                {
                  "color": "#41353a",
                  "name": "Lava Heather"
                },
                {
                  "color": "#b6a99a",
                  "name": "Mink Heather"
                },
                {
                  "color": "#3b4339",
                  "name": "Shire Heather"
                },
                {
                  "color": "#211d1d",
                  "name": "Coal"
                },
                {
                  "color": "#626163",
                  "name": "Cobblestone Heather"
                },
                {
                  "color": "#afa5a5",
                  "name": "Crane Heather"
                },
                {
                  "color": "#c9cbc9",
                  "name": "Dove Heather"
                },
                {
                  "color": "#aaa8b0",
                  "name": "Gull"
                },
                {
                  "color": "#6b6c72",
                  "name": "Marble Heather"
                },
                {
                  "color": "#4f5463",
                  "name": "Mist"
                },
                {
                  "color": "#464850",
                  "name": "Onyx Heather"
                },
                {
                  "color": "#2c2c35",
                  "name": "Penguin"
                },
                {
                  "color": "#8d8d8c",
                  "name": "Silver"
                },
                {
                  "color": "#e7e0cd",
                  "name": "Cloud"
                },
                {
                  "color": "#d4c5bb",
                  "name": "Oyster Heather"
                },
                {
                  "color": "#d3d0c8",
                  "name": "White"
                }
              ]
            }
          ],
          "name": "Wool of the Andes Worsted",
          "id": "wool_of_the_andes_worsted"
        }
      ]
    },
    {
      "name": "Lily Sugar'n Cream",
      "id": "lily_sugar_n_cream",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "yarnspirations.com",
                "url": "https://www.yarnspirations.com/lily-sugarn-cream-the-original-yarn/102001.html",
                "accessed": "2022-03-19"
              },
              "colors": [
                {
                  "color": "#e7e7f5",
                  "name": "White"
                },
                {
                  "color": "#e4dedd",
                  "name": "Ecru"
                },
                {
                  "color": "#d9af8c",
                  "name": "Jute"
                },
                {
                  "color": "#e9a68c",
                  "name": "Tea Rose"
                },
                {
                  "color": "#e2808e",
                  "name": "Rose Pink"
                },
                {
                  "color": "#dc3f82",
                  "name": "Hot Pink"
                },
                {
                  "color": "#a9d2c9",
                  "name": "Robin's Egg"
                },
                {
                  "color": "#c5e7ef",
                  "name": "Beach Glass"
                },
                {
                  "color": "#fa742b",
                  "name": "Hot Orange"
                },
                {
                  "color": "#e24f4c",
                  "name": "Tangerine"
                },
                {
                  "color": "#7c1929",
                  "name": "Wine"
                },
                {
                  "color": "#b21f2f",
                  "name": "Red"
                },
                {
                  "color": "#ad293e",
                  "name": "Country Red"
                },
                {
                  "color": "#bc99be",
                  "name": "Soft Violet"
                },
                {
                  "color": "#a487a7",
                  "name": "Hot Purple"
                },
                {
                  "color": "#653c7a",
                  "name": "Black Currant"
                },
                {
                  "color": "#f7d887",
                  "name": "Yellow"
                },
                {
                  "color": "#e6cc34",
                  "name": "Sunshine"
                },
                {
                  "color": "#e5cdb5",
                  "name": "Soft Ecru"
                },
                {
                  "color": "#e6c490",
                  "name": "Country Yellow"
                },
                {
                  "color": "#c6da59",
                  "name": "Hot Green"
                },
                {
                  "color": "#97955d",
                  "name": "Sage Green"
                },
                {
                  "color": "#3a9188",
                  "name": "Seabreeze"
                },
                {
                  "color": "#088057",
                  "name": "Mod Green"
                },
                {
                  "color": "#216034",
                  "name": "Dark Pine"
                },
                {
                  "color": "#18707b",
                  "name": "Teal"
                },
                {
                  "color": "#5cabd8",
                  "name": "Hot Blue"
                },
                {
                  "color": "#444e60",
                  "name": "Indigo"
                },
                {
                  "color": "#6c7ea1",
                  "name": "Blue Jeans"
                },
                {
                  "color": "#919aab",
                  "name": "Stonewash"
                },
                {
                  "color": "#8096aa",
                  "name": "Light Blue"
                },
                {
                  "color": "#5e8bd3",
                  "name": "Blueberry"
                },
                {
                  "color": "#324494",
                  "name": "Dazzle Blue"
                },
                {
                  "color": "#1e1f21",
                  "name": "Black"
                },
                {
                  "color": "#181b25",
                  "name": "Bright Navy"
                },
                {
                  "color": "#4b3b6c",
                  "name": "Grape"
                },
                {
                  "color": "#6c6763",
                  "name": "Overcast"
                },
                {
                  "color": "#684c38",
                  "name": "Warm Brown"
                },
                {
                  "color": "#7f9266",
                  "name": "Meadow"
                },
                {
                  "color": "#c85f6c",
                  "name": "Pretty in Pink"
                },
                {
                  "color": "#c8a2bf",
                  "name": "Orchid"
                }
              ]
            }
          ],
          "name": "The Original",
          "id": "the_original"
        }
      ]
    },
    {
      "name": "Lion Brand",
      "id": "lion_brand",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "lionbrand.com",
                "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn",
                "accessed": "2023-02-01"
              },
              "colors": [
                {
                  "color": "#dc9da7",
                  "name": "Terracotta",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32901205655645"
                },
                {
                  "color": "#dafbfa",
                  "name": "Lichen",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32716051480669"
                },
                {
                  "color": "#dda691",
                  "name": "Peach",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32421603082333"
                },
                {
                  "color": "#fbec7e",
                  "name": "Yellow",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32421603049565"
                },
                {
                  "color": "#a8b0be",
                  "name": "Silver",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32421603016797"
                },
                {
                  "color": "#ecbeba",
                  "name": "Mauve",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32421602984029"
                },
                {
                  "color": "#a42b81",
                  "name": "Magenta",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32421602951261"
                },
                {
                  "color": "#b696c3",
                  "name": "Lilac",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32421602918493"
                },
                {
                  "color": "#708363",
                  "name": "Olive",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32421602852957"
                },
                {
                  "color": "#9d847c",
                  "name": "Taupe",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32421602787421"
                },
                {
                  "color": "#e5d6ca",
                  "name": "Tan",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32421602754653"
                },
                {
                  "color": "#d6b38c",
                  "name": "Beige",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32421602721885"
                },
                {
                  "color": "#516a7f",
                  "name": "Denim",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32421602656349"
                },
                {
                  "color": "#9bd9eb",
                  "name": "Ice Blue",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32421602623581"
                },
                {
                  "color": "#f3e6ec",
                  "name": "Pale Pink",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32421602590813"
                },
                {
                  "color": "#efc8d1",
                  "name": "Pink",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32421602558045"
                },
                {
                  "color": "#f0f7f9",
                  "name": "White",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32421602525277"
                },
                {
                  "color": "#314057",
                  "name": "Steel Blue",
                  "url": "https://www.lionbrand.com/collections/yarn-weight-3-light/products/coboo-yarn?variant=32421602689117"
                }
              ]
            }
          ],
          "name": "Coboo",
          "id": "coboo"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "lionbrand.com",
                "url": "https://www.lionbrand.com/products/color-theory-yarn",
                "accessed": "2022-12-31"
              },
              "colors": [
                {
                  "color": "#d3a075",
                  "name": "Himalayan Salt",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126225383517"
                },
                {
                  "color": "#86a9a4",
                  "name": "Tourmaline",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126223450205"
                },
                {
                  "color": "#72704d",
                  "name": "Caper",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126219681885"
                },
                {
                  "color": "#8b7733",
                  "name": "Dijon",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126218502237"
                },
                {
                  "color": "#c59e2c",
                  "name": "Bee Pollen",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126217519197"
                },
                {
                  "color": "#99899c",
                  "name": "Provence",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126216732765"
                },
                {
                  "color": "#484a51",
                  "name": "Thunder",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126216241245"
                },
                {
                  "color": "#a4a39b",
                  "name": "Satellite",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126215782493"
                },
                {
                  "color": "#004748",
                  "name": "Peacock",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126214930525"
                },
                {
                  "color": "#6a637d",
                  "name": "Amethyst",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126213292125"
                },
                {
                  "color": "#7c4f3e",
                  "name": "Raisin",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126212603997"
                },
                {
                  "color": "#a0463a",
                  "name": "Canyon",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126210900061"
                },
                {
                  "color": "#996a4b",
                  "name": "Nutmeg",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126209556573"
                },
                {
                  "color": "#b7a098",
                  "name": "Bone",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126206050397"
                },
                {
                  "color": "#2a2c42",
                  "name": "Admiral",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126205788253"
                },
                {
                  "color": "#425b68",
                  "name": "Stonewash",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126205591645"
                },
                {
                  "color": "#d6d3c6",
                  "name": "Moonbeam",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40126204739677"
                },
                {
                  "color": "#f0e8d0",
                  "name": "Ivory",
                  "url": "https://www.lionbrand.com/products/color-theory-yarn?variant=40116552728669"
                }
              ]
            }
          ],
          "name": "Color Theory",
          "id": "color_theory"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "lionbrand.com",
                "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton",
                "accessed": "2022-03-11"
              },
              "colors": [
                {
                  "color": "#f2d059",
                  "name": "Lemon",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32575391596637"
                },
                {
                  "color": "#dc7600",
                  "name": "Goldenrod",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981801053"
                },
                {
                  "color": "#5f4637",
                  "name": "Café Au Lait",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981538909"
                },
                {
                  "color": "#ecc79f",
                  "name": "Ecru",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981211229"
                },
                {
                  "color": "#e7e7e7",
                  "name": "White",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981243997"
                },
                {
                  "color": "#80d3cc",
                  "name": "Aqua",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981276765"
                },
                {
                  "color": "#8297b7",
                  "name": "Sky",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981309533"
                },
                {
                  "color": "#414663",
                  "name": "Denim",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981342301"
                },
                {
                  "color": "#2e2c4f",
                  "name": "Navy",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981375069"
                },
                {
                  "color": "#bf0014",
                  "name": "Red",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981407837"
                },
                {
                  "color": "#63bbb5",
                  "name": "Succulent",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981440605"
                },
                {
                  "color": "#a48d74",
                  "name": "Taupe",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981473373"
                },
                {
                  "color": "#db3e18",
                  "name": "Tangerine",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32575184830557"
                },
                {
                  "color": "#b4672b",
                  "name": "Camel",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981506141"
                },
                {
                  "color": "#d03882",
                  "name": "Rose",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981571677"
                },
                {
                  "color": "#955167",
                  "name": "Lilac",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981604445"
                },
                {
                  "color": "#7d063d",
                  "name": "Magenta",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981637213"
                },
                {
                  "color": "#6e4375",
                  "name": "Purple",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981669981"
                },
                {
                  "color": "#89898f",
                  "name": "Silver",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981702749"
                },
                {
                  "color": "#46484c",
                  "name": "Charcoal",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981735517"
                },
                {
                  "color": "#161518",
                  "name": "Black",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981768285"
                },
                {
                  "color": "#587c0a",
                  "name": "Grass",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981833821"
                },
                {
                  "color": "#407f6b",
                  "name": "Jade",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32420981866589"
                },
                {
                  "color": "#9ecfa1",
                  "name": "Mint",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32575389171805"
                },
                {
                  "color": "#ff7e9d",
                  "name": "Pink",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32575392186461"
                },
                {
                  "color": "#b73d59",
                  "name": "Terracotta",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32926492622941"
                },
                {
                  "color": "#f6cdd0",
                  "name": "Pink Lemonade",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32990468472925"
                },
                {
                  "color": "#502726",
                  "name": "Coffee Beans",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32990471323741"
                },
                {
                  "color": "#f19700",
                  "name": "Creamsicle",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32990474240093"
                },
                {
                  "color": "#d68dd2",
                  "name": "Orchid",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32990474469469"
                },
                {
                  "color": "#55053c",
                  "name": "Beets",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32990474698845"
                },
                {
                  "color": "#a7cbd4",
                  "name": "Cool Grey",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32990475124829"
                },
                {
                  "color": "#cfed4c",
                  "name": "Lime",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32990475354205"
                },
                {
                  "color": "#6f7a3a",
                  "name": "Bayleaf",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32990475583581"
                },
                {
                  "color": "#9c7e40",
                  "name": "Hay Bale",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32990475812957"
                },
                {
                  "color": "#004959",
                  "name": "Dragonfly",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32990476664925"
                },
                {
                  "color": "#c96500",
                  "name": "Amber",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/24-7-cotton?variant=32990487117917"
                }
              ]
            }
          ],
          "name": "24/7 Cotton",
          "id": "24_7_cotton"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "lionbrand.com",
                "url": "https://www.lionbrand.com/products/feels-like-butta",
                "accessed": "2022-03-19"
              },
              "colors": [
                {
                  "color": "#eda300",
                  "name": "Golden Sunshine",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=39615660687453"
                },
                {
                  "color": "#e1e1e2",
                  "name": "White",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=32421562220637"
                },
                {
                  "color": "#f0c3c9",
                  "name": "Pink",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=32421562253405"
                },
                {
                  "color": "#c4d8d7",
                  "name": "Ice",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=32421562286173"
                },
                {
                  "color": "#57838d",
                  "name": "Dusty Blue",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=32421562318941"
                },
                {
                  "color": "#202155",
                  "name": "Royal Blue",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=32421562351709"
                },
                {
                  "color": "#690c25",
                  "name": "Cranberry",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=32421562482781"
                },
                {
                  "color": "#ce6273",
                  "name": "Dusty Pink",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=32421562515549"
                },
                {
                  "color": "#d5aecc",
                  "name": "Lilac",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=32421562548317"
                },
                {
                  "color": "#d2d4d1",
                  "name": "Pale Grey",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=32421562581085"
                },
                {
                  "color": "#535353",
                  "name": "Charcoal",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=32421562613853"
                },
                {
                  "color": "#171717",
                  "name": "Black",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=32421562646621"
                },
                {
                  "color": "#dbdf9e",
                  "name": "Mint",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=32421562679389"
                },
                {
                  "color": "#f5b134",
                  "name": "Yellow",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=32421562712157"
                },
                {
                  "color": "#f0e8ad",
                  "name": "Lemon",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=32421562744925"
                },
                {
                  "color": "#113e44",
                  "name": "Teal",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=32421562777693"
                },
                {
                  "color": "#91b3d8",
                  "name": "Periwinkle",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=39310150729821"
                },
                {
                  "color": "#bde7d5",
                  "name": "Seagreen",
                  "url": "https://www.lionbrand.com/products/feels-like-butta?variant=39310150762589"
                }
              ]
            }
          ],
          "name": "Feels Like Butta",
          "id": "feels_like_butta"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "lionbrand.com",
                "url": "https://www.lionbrand.com/products/heartland-yarn",
                "accessed": "2023-01-17"
              },
              "colors": [
                {
                  "color": "#909752",
                  "name": "Haleakala"
                },
                {
                  "color": "#453144",
                  "name": "New River Gorge"
                },
                {
                  "color": "#c4c5da",
                  "name": "North Cascades"
                },
                {
                  "color": "#c896a4",
                  "name": "Lassen Volcanic"
                },
                {
                  "color": "#9f8c6b",
                  "name": "Indiana Dunes"
                },
                {
                  "color": "#347497",
                  "name": "Virgin Islands"
                },
                {
                  "color": "#5e716e",
                  "name": "Petrified Forest"
                },
                {
                  "color": "#acc0be",
                  "name": "White Sands"
                },
                {
                  "color": "#ce6223",
                  "name": "Gateway Arch"
                },
                {
                  "color": "#bfdfb6",
                  "name": "Channel Islands"
                },
                {
                  "color": "#c6bbb4",
                  "name": "Wolf Trap"
                },
                {
                  "color": "#89b6bf",
                  "name": "Congaree"
                },
                {
                  "color": "#335751",
                  "name": "Rocky Mountains"
                },
                {
                  "color": "#c5a2a7",
                  "name": "Capitol Reef"
                },
                {
                  "color": "#9b7517",
                  "name": "Canyonlands"
                },
                {
                  "color": "#3b5883",
                  "name": "Carlsbad Caverns"
                },
                {
                  "color": "#85adbe",
                  "name": "Voyageurs"
                },
                {
                  "color": "#b6b9aa",
                  "name": "Dry Tortugas"
                },
                {
                  "color": "#843b2a",
                  "name": "Yosemite"
                },
                {
                  "color": "#303031",
                  "name": "Black Canyon Tweed"
                },
                {
                  "color": "#918d8c",
                  "name": "Mount Rainier Tweed"
                },
                {
                  "color": "#18302c",
                  "name": "Kings Canyon"
                },
                {
                  "color": "#164749",
                  "name": "Cuyahoga Valley"
                },
                {
                  "color": "#7d8287",
                  "name": "Mount Rainier"
                },
                {
                  "color": "#582331",
                  "name": "Badlands"
                },
                {
                  "color": "#2f1844",
                  "name": "Hot Springs"
                },
                {
                  "color": "#965b29",
                  "name": "Bryce Canyon"
                },
                {
                  "color": "#523635",
                  "name": "Sequoia"
                },
                {
                  "color": "#a4958d",
                  "name": "Grand Canyon"
                },
                {
                  "color": "#1d5565",
                  "name": "Glacier Bay"
                },
                {
                  "color": "#d8c4a1",
                  "name": "Acadia"
                },
                {
                  "color": "#34567c",
                  "name": "Olympic"
                },
                {
                  "color": "#941d27",
                  "name": "Redwood"
                },
                {
                  "color": "#614c44",
                  "name": "Mammoth Cave"
                },
                {
                  "color": "#494845",
                  "name": "Great Smoky Mountains"
                },
                {
                  "color": "#222026",
                  "name": "Black Canyon"
                },
                {
                  "color": "#5d5535",
                  "name": "Joshua Tree"
                },
                {
                  "color": "#65486d",
                  "name": "Kobuk Valley"
                }
              ]
            }
          ],
          "name": "Heartland",
          "id": "heartland"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "lionbrand.com",
                "url": "https://www.lionbrand.com/collections/schittscreek/products/schitts-creek-yarn",
                "accessed": "2023-01-06"
              },
              "colors": [
                {
                  "color": "#e683af",
                  "name": "Moira's Rose"
                },
                {
                  "color": "#f9eb88",
                  "name": "Fold In The Cheese"
                },
                {
                  "color": "#91646d",
                  "name": "Wine And Roses"
                },
                {
                  "color": "#069aa2",
                  "name": "Shared Wall"
                },
                {
                  "color": "#048747",
                  "name": "Cafe Tropical"
                },
                {
                  "color": "#b7ac84",
                  "name": "The Premiere"
                },
                {
                  "color": "#857364",
                  "name": "Boho Brown"
                },
                {
                  "color": "#b1dbee",
                  "name": "Bebe Blue"
                },
                {
                  "color": "#c2c8b3",
                  "name": "Rose Apothecary"
                },
                {
                  "color": "#d2c5c2",
                  "name": "A Little Blush"
                },
                {
                  "color": "#86898a",
                  "name": "Johnny Suit Grey"
                },
                {
                  "color": "#434649",
                  "name": "Finding David"
                },
                {
                  "color": "#111217",
                  "name": "Black Crow"
                },
                {
                  "color": "#501d21",
                  "name": "Rosebud Motel"
                },
                {
                  "color": "#e9f2ed",
                  "name": "Hide Your Diamonds"
                },
                {
                  "color": "#13355d",
                  "name": "Bobs Garage"
                }
              ]
            }
          ],
          "name": "Schitt's Creek",
          "id": "schitts_creek"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "lionbrand.com",
                "url": "https://www.lionbrand.com/products/truboo-yarn",
                "accessed": "2022-03-17"
              },
              "colors": [
                {
                  "color": "#f06c0a",
                  "name": "Tangerine",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421798117469"
                },
                {
                  "color": "#e0edeb",
                  "name": "White",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421797724253"
                },
                {
                  "color": "#dfa2ac",
                  "name": "Light Pink",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421797757021"
                },
                {
                  "color": "#0abfcf",
                  "name": "Aqua",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421797789789"
                },
                {
                  "color": "#dd7d63",
                  "name": "Coral",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421797855325"
                },
                {
                  "color": "#56aacd",
                  "name": "Light Blue",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421797888093"
                },
                {
                  "color": "#0883b9",
                  "name": "Blue",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421797920861"
                },
                {
                  "color": "#0e947d",
                  "name": "Seafoam",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421797953629"
                },
                {
                  "color": "#8a687b",
                  "name": "Mushroom",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421798019165"
                },
                {
                  "color": "#b08f81",
                  "name": "Tan",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421798051933"
                },
                {
                  "color": "#9dbe5c",
                  "name": "Celery",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421798084701"
                },
                {
                  "color": "#9c9fbd",
                  "name": "Lilac",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421798150237"
                },
                {
                  "color": "#915d8f",
                  "name": "Mauve",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421798183005"
                },
                {
                  "color": "#3747ab",
                  "name": "Thistle",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421798215773"
                },
                {
                  "color": "#9cb2c0",
                  "name": "Silver",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421798248541"
                },
                {
                  "color": "#343c50",
                  "name": "Slate",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421798281309"
                },
                {
                  "color": "#66c6ab",
                  "name": "Mint",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421798314077"
                },
                {
                  "color": "#e2d34e",
                  "name": "Yellow",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421798346845"
                },
                {
                  "color": "#f9b100",
                  "name": "Marigold",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=32421798379613"
                },
                {
                  "color": "#d58a92",
                  "name": "Cameo",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=39322446626909"
                },
                {
                  "color": "#75acb6",
                  "name": "Sky",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=39322446987357"
                },
                {
                  "color": "#254374",
                  "name": "Navy",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=39322447216733"
                },
                {
                  "color": "#918c61",
                  "name": "Khaki",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=39322447675485"
                },
                {
                  "color": "#b49d8d",
                  "name": "Sand",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=39322448068701"
                },
                {
                  "color": "#d7395f",
                  "name": "Rose",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=39322448494685"
                },
                {
                  "color": "#712058",
                  "name": "Mulberry",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=39322448527453"
                },
                {
                  "color": "#de8d5e",
                  "name": "Sienna",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=39322448592989"
                },
                {
                  "color": "#d0a801",
                  "name": "Goldenrod",
                  "url": "https://www.lionbrand.com/products/truboo-yarn?variant=39322448625757"
                }
              ]
            }
          ],
          "name": "Truboo",
          "id": "truboo"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "lionbrand.com",
                "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn",
                "accessed": "2022-03-07"
              },
              "colors": [
                {
                  "color": "#c1833f",
                  "name": "Honey",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953555037"
                },
                {
                  "color": "#ded4c4",
                  "name": "Fisherman",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420952997981"
                },
                {
                  "color": "#dad5ca",
                  "name": "Linen",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953063517"
                },
                {
                  "color": "#f9f9f9",
                  "name": "White",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953096285"
                },
                {
                  "color": "#efd2cd",
                  "name": "Pink",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953129053"
                },
                {
                  "color": "#cdd8de",
                  "name": "Silver Blue",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953161821"
                },
                {
                  "color": "#7192a4",
                  "name": "Dusty Blue",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953227357"
                },
                {
                  "color": "#3e64a8",
                  "name": "Colonial Blue",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953260125"
                },
                {
                  "color": "#111d2f",
                  "name": "Navy",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953292893"
                },
                {
                  "color": "#d13531",
                  "name": "Scarlet",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953358429"
                },
                {
                  "color": "#0c1a33",
                  "name": "Midnight Blue",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953423965"
                },
                {
                  "color": "#e8d6b9",
                  "name": "Beige",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953456733"
                },
                {
                  "color": "#9a7d6c",
                  "name": "Taupe",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953489501"
                },
                {
                  "color": "#744b3e",
                  "name": "Chocolate",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953522269"
                },
                {
                  "color": "#9f312a",
                  "name": "Brick",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953620573"
                },
                {
                  "color": "#8a6080",
                  "name": "Dusty Purple",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953718877"
                },
                {
                  "color": "#584572",
                  "name": "Purple",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953751645"
                },
                {
                  "color": "#717274",
                  "name": "Silver Grey",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953817181"
                },
                {
                  "color": "#9f9fa1",
                  "name": "Pale Grey",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953849949"
                },
                {
                  "color": "#636367",
                  "name": "Charcoal Grey",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953849949"
                },
                {
                  "color": "#0b0d13",
                  "name": "Black",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420953915485"
                },
                {
                  "color": "#687543",
                  "name": "Kelly Green",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420954046557"
                },
                {
                  "color": "#77784e",
                  "name": "Dusty Green",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420954079325"
                },
                {
                  "color": "#76764c",
                  "name": "Olive",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420954112093"
                },
                {
                  "color": "#566b61",
                  "name": "Sage",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420954144861"
                },
                {
                  "color": "#5f1013",
                  "name": "Cranberry",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420954177629"
                },
                {
                  "color": "#686c90",
                  "name": "Denim Mist",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420954275933"
                },
                {
                  "color": "#98a191",
                  "name": "Grey Marble",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420954308701"
                },
                {
                  "color": "#795e42",
                  "name": "Barley",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420954341469"
                },
                {
                  "color": "#363536",
                  "name": "Dark Gray Heather",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420954374237"
                },
                {
                  "color": "#c6c7c7",
                  "name": "Silver Heather",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32420954407005"
                },
                {
                  "color": "#e96f6e",
                  "name": "Pink Grapefruit",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32582795427933"
                },
                {
                  "color": "#b5593b",
                  "name": "Terracotta",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32582795952221"
                },
                {
                  "color": "#d2ab4c",
                  "name": "Mustard",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32582796378205"
                },
                {
                  "color": "#beb285",
                  "name": "Oatmeal",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32582799491165"
                },
                {
                  "color": "#c27e96",
                  "name": "Rose Mist",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32617665265757"
                },
                {
                  "color": "#d0d995",
                  "name": "Seaspray Mist",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32617671295069"
                },
                {
                  "color": "#a25a34",
                  "name": "Rust",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32617678536797"
                },
                {
                  "color": "#a29652",
                  "name": "Pea Green",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32630680715357"
                },
                {
                  "color": "#b0a8a2",
                  "name": "Vanila Twist",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32630881189981"
                },
                {
                  "color": "#143144",
                  "name": "Orion Blue",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32926507466845"
                },
                {
                  "color": "#829386",
                  "name": "Shadow",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32926507696221"
                },
                {
                  "color": "#bdd2c6",
                  "name": "Sea Glass",
                  "url": "https://www.lionbrand.com/collections/all-yarns/products/vannas-choice-yarn?variant=32926508154973"
                }
              ]
            }
          ],
          "name": "Vanna's Choice",
          "id": "vannas_choice"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "lionbrand.com",
                "url": "https://www.lionbrand.com/products/wool-ease-yarn",
                "accessed": "2022-03-11"
              },
              "colors": [
                {
                  "color": "#8f5d11",
                  "name": "Arrowwood",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32691681591389"
                },
                {
                  "color": "#34483f",
                  "name": "Forest Green Heather",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32420967219293"
                },
                {
                  "color": "#f3e9cd",
                  "name": "Natural Heather",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32420966563933"
                },
                {
                  "color": "#ded3bf",
                  "name": "Fisherman",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32420966596701"
                },
                {
                  "color": "#bb9ba2",
                  "name": "Blush Heather",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32420966662237"
                },
                {
                  "color": "#334450",
                  "name": "Navy",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32420966727773"
                },
                {
                  "color": "#47606a",
                  "name": "Denim",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32420966760541"
                },
                {
                  "color": "#465362",
                  "name": "Blue Mist",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32420966793309"
                },
                {
                  "color": "#72afa5",
                  "name": "Succulent",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32420966826077"
                },
                {
                  "color": "#853443",
                  "name": "Cranberry",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32420966858845"
                },
                {
                  "color": "#a35273",
                  "name": "Dark Rose Heather",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32420966891613"
                },
                {
                  "color": "#d28898",
                  "name": "Rose Heather",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32420966924381"
                },
                {
                  "color": "#B3B5B5",
                  "name": "Grey Heather",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32420966957149"
                },
                {
                  "color": "#686C6F",
                  "name": "Oxford Grey",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32420966989917"
                },
                {
                  "color": "#242327",
                  "name": "Black",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32420967055453"
                },
                {
                  "color": "#e7e8e3",
                  "name": "White/Multi",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32420967317597"
                },
                {
                  "color": "#ece1c2",
                  "name": "Wheat",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32420967350365"
                },
                {
                  "color": "#b97b72",
                  "name": "Canyon Sunset",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32691677364317"
                },
                {
                  "color": "#642c0e",
                  "name": "Umber",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32691681034333"
                },
                {
                  "color": "#8a150a",
                  "name": "Koi",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32691681198173"
                },
                {
                  "color": "#5d384e",
                  "name": "Raindrops",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32691681263709"
                },
                {
                  "color": "#313134",
                  "name": "Flint",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32691681329245"
                },
                {
                  "color": "#73a59e",
                  "name": "Stillwater",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32691681460317"
                },
                {
                  "color": "#430520",
                  "name": "Tawny Port",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32691681656925"
                },
                {
                  "color": "#d4ceca",
                  "name": "Linen",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32691681689693"
                },
                {
                  "color": "#97858b",
                  "name": "Oatmeal",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32691681722461"
                },
                {
                  "color": "#18344b",
                  "name": "Riverside",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32691680608349"
                },
                {
                  "color": "#0c1224",
                  "name": "Nightshade",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32691680641117"
                },
                {
                  "color": "#c6b0b9",
                  "name": "Antler",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32691680673885"
                },
                {
                  "color": "#674745",
                  "name": "Thrush",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32691680673885"
                },
                {
                  "color": "#c5cdd3",
                  "name": "Icicle",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32691681787997"
                },
                {
                  "color": "#003734",
                  "name": "Rainforest",
                  "url": "https://www.lionbrand.com/products/wool-ease-yarn?variant=32719285321821"
                }
              ]
            }
          ],
          "name": "Wool-Ease",
          "id": "wool_ease"
        }
      ]
    },
    {
      "name": "Loops & Threads",
      "id": "loops_and_threads",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "michaels.com",
                "url": "https://www.michaels.com/impeccable-solid-yarn-by-loops-and-threads-/10151122.html",
                "accessed": "2022-04-25"
              },
              "colors": [
                {
                  "color": "#041c5f",
                  "name": "Royal",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Royal&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#e7e3e6",
                  "name": "White",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=White&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#d1b307",
                  "name": "Grass",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Grass&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#e3194e",
                  "name": "Arbor Rose",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Arbor%20Rose&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#320252",
                  "name": "Grape Punch",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Grape%20Punch&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#055077",
                  "name": "Brite Sky Blue",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Brite%20Sky%20Blue&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#9d0444",
                  "name": "Rich Orchid",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Rich%20Orchid&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#41241f",
                  "name": "Chocolate Brown",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Chocolate%20Brown&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#930418",
                  "name": "Cherry",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#43193a",
                  "name": "Amethyst",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Amethyst&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#f7c255",
                  "name": "Butterscotch",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Butterscotch&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#5d5152",
                  "name": "True Grey",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=True%20Grey&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#261e1e",
                  "name": "Black",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Black&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#075f45",
                  "name": "Kelly Green",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Kelly%20Green&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#6b673b",
                  "name": "Forest",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Forest&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#8e0112",
                  "name": "Claret",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Claret&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#098e99",
                  "name": "Aqua",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Aqua&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#c33a08",
                  "name": "Pumpkin",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Pumpkin&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#f39305",
                  "name": "Sunny Day",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Sunny%20Day&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#dd9198",
                  "name": "Soft Rose",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Soft%20Rose&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#938c4b",
                  "name": "Fern",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Fern&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#e5d5c0",
                  "name": "Aran",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Aran&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#076ab1",
                  "name": "Clear Blue",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Clear%20Blue&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#bc0660",
                  "name": "Lippy",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Lippy&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#b5805b",
                  "name": "Soft Taupe",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Soft%20Taupe&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#4f432e",
                  "name": "Deep Forest",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Deep%20Forest&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#680524",
                  "name": "Burgundy",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Burgundy&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#9c0307",
                  "name": "Red Hot",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Red%20Hot&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#2f2029",
                  "name": "Navy Blue",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Navy%20Blue&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#7f6490",
                  "name": "Lavender",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Lavender&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#e6be91",
                  "name": "Heather",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Heather&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#dc1d06",
                  "name": "Orange Crush",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Orange%20Crush&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#cd7907",
                  "name": "Gold",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Gold&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#065557",
                  "name": "Teal",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Teal&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#828282",
                  "name": "Pale Gray",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Pale%20Gray&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#a7d2ca",
                  "name": "Skylight",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Skylight&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#bdc2d9",
                  "name": "Petunia",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Petunia&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#354c67",
                  "name": "Blue Moon",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Blue%20Moon&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#221c1c",
                  "name": "Dark Charcoal",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Dark%20Charcoal&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#5d514d",
                  "name": "Barley",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Barley&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#bdc668",
                  "name": "Citron",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Citron&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#b1ada6",
                  "name": "Putty",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Putty&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#c41a2e",
                  "name": "Rouge",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Rouge&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#725269",
                  "name": "Plum",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Plum&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#464243",
                  "name": "Thunder",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Thunder&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#c5c1c0",
                  "name": "Classic Gray",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Classic%20Gray&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#b6bdc4",
                  "name": "Smoke",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Smoke&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#091829",
                  "name": "Sapphire",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Sapphire&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#688073",
                  "name": "Green Lagoon",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Green%20Lagoon&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#536e7c",
                  "name": "Misty Blue",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Misty%20Blue&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#74c5cb",
                  "name": "Sea Green",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Sea%20Green&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#f26875",
                  "name": "Coral",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Coral&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#67b68b",
                  "name": "Jade",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Jade&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#1bb3b7",
                  "name": "Aruba Blue",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Aruba%20Blue&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#85637f",
                  "name": "Violet",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Violet&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#c73c34",
                  "name": "Fire Red",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Fire%20Red&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#60539b",
                  "name": "Eggplant",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Eggplant&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#a0c3ce",
                  "name": "Blue Haze",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Blue%20Haze&dwvar_M10108918_size=4%2e5%20oz"
                },
                {
                  "color": "#d3c7b7",
                  "name": "Golden Beige",
                  "url": "https://www.michaels.com/on/demandware.store/Sites-MichaelsUS-Site/default/Product-Variation?pid=M10108918&dwvar_M10108918_color=Golden%20Beige&dwvar_M10108918_size=4%2e5%20oz"
                }
              ]
            }
          ],
          "name": "Impeccable",
          "id": "impeccable"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "michaels.com",
                "url": "https://www.michaels.com/soft-and-shiny-solid-yarn-by-loops-and-threads/M20000268.html",
                "accessed": "2023-01-25"
              },
              "colors": [
                {
                  "color": "#d83d68",
                  "name": "Burgundy"
                },
                {
                  "color": "#701cf0",
                  "name": "Purple"
                },
                {
                  "color": "#be8185",
                  "name": "Smokey Rose"
                },
                {
                  "color": "#c1e2d8",
                  "name": "Mellow Green"
                },
                {
                  "color": "#a3bac5",
                  "name": "Icy Blue"
                },
                {
                  "color": "#70ab76",
                  "name": "Bay Leaf"
                },
                {
                  "color": "#bd6976",
                  "name": "Rosy Mauve"
                },
                {
                  "color": "#d2482d",
                  "name": "Ginger Peach"
                },
                {
                  "color": "#184363",
                  "name": "Blue Berry"
                },
                {
                  "color": "#da989e",
                  "name": "Blush"
                },
                {
                  "color": "#10c0c3",
                  "name": "Robbins Egg"
                },
                {
                  "color": "#0073b6",
                  "name": "Cobalt"
                },
                {
                  "color": "#aa8fba",
                  "name": "Orchid"
                },
                {
                  "color": "#8299a3",
                  "name": "Powder Blue"
                },
                {
                  "color": "#5564b0",
                  "name": "Lavender Fields"
                },
                {
                  "color": "#2e5341",
                  "name": "Parsley"
                },
                {
                  "color": "#2f4251",
                  "name": "Vintage Indigo"
                },
                {
                  "color": "#633a32",
                  "name": "Cacao"
                },
                {
                  "color": "#ac9c88",
                  "name": "Ice Coffee"
                },
                {
                  "color": "#dfd6b0",
                  "name": "Creme Fresh"
                },
                {
                  "color": "#7593b4",
                  "name": "Hydrangea"
                },
                {
                  "color": "#bf9f3d",
                  "name": "Yellow"
                },
                {
                  "color": "#e2e4e6",
                  "name": "White"
                },
                {
                  "color": "#00a5c5",
                  "name": "Aqua"
                },
                {
                  "color": "#1c2523",
                  "name": "Black"
                },
                {
                  "color": "#81b000",
                  "name": "Citrus"
                },
                {
                  "color": "#1737c7",
                  "name": "Royal"
                },
                {
                  "color": "#70726a",
                  "name": "Gray"
                },
                {
                  "color": "#eb0029",
                  "name": "Red"
                },
                {
                  "color": "#d3cfc6",
                  "name": "Cream"
                },
                {
                  "color": "#3e76bc",
                  "name": "Denim"
                },
                {
                  "color": "#c07900",
                  "name": "Golden"
                },
                {
                  "color": "#4d5364",
                  "name": "Cadet Blue"
                },
                {
                  "color": "#94725d",
                  "name": "Cappuccino"
                },
                {
                  "color": "#6f0826",
                  "name": "Persian Red"
                },
                {
                  "color": "#7a5a17",
                  "name": "Green Moss"
                },
                {
                  "color": "#d64a3b",
                  "name": "Cadmium Orange"
                },
                {
                  "color": "#b02f14",
                  "name": "Pumpkin"
                }
              ]
            }
          ],
          "name": "Soft & Shiny Solid",
          "id": "soft_and_shiny_solid"
        }
      ]
    },
    {
      "name": "Malabrigo",
      "id": "malabrigo",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "malabrigoyarn.com",
                "url": "https://malabrigoyarn.com/yarns/rios",
                "accessed": "2022-03-11"
              },
              "colors": [
                {
                  "name": "Chaja",
                  "color": "#e1a63c"
                },
                {
                  "name": "Dunas",
                  "color": "#c99a62"
                },
                {
                  "name": "Dulce de Leche",
                  "color": "#c36d59"
                },
                {
                  "name": "Lonja",
                  "color": "#b98671"
                },
                {
                  "name": "Ceibo",
                  "color": "#c64e5c"
                },
                {
                  "name": "Lapacho",
                  "color": "#e99895"
                },
                {
                  "name": "Lila",
                  "color": "#c9a1b2"
                },
                {
                  "name": "Jacaranda",
                  "color": "#93819e"
                },
                {
                  "name": "Santa Rita",
                  "color": "#922e50"
                },
                {
                  "name": "Eucalipto",
                  "color": "#968978"
                },
                {
                  "name": "Mate",
                  "color": "#91775f"
                },
                {
                  "name": "Uruguay",
                  "color": "#6f83c2"
                },
                {
                  "name": "Rio de la Plata",
                  "color": "#627d98"
                },
                {
                  "name": "Casapueblo",
                  "color": "#5b7294"
                },
                {
                  "name": "Lobo Marino",
                  "color": "#6f6878"
                },
                {
                  "name": "Almond Blossom",
                  "color": "#c3a4a7"
                },
                {
                  "name": "Melon",
                  "color": "#ae9181"
                },
                {
                  "name": "Ivory",
                  "color": "#c0bab1"
                },
                {
                  "name": "Fog",
                  "color": "#9a999a"
                },
                {
                  "name": "Whole Grain",
                  "color": "#88878b"
                },
                {
                  "name": "Cucumber",
                  "color": "#7caba0"
                },
                {
                  "name": "Cosmos",
                  "color": "#787f85"
                },
                {
                  "name": "Valentina",
                  "color": "#a490aa"
                },
                {
                  "name": "Cape Cod Gray",
                  "color": "#73767d"
                },
                {
                  "name": "Ravelry Red",
                  "color": "#611728"
                },
                {
                  "name": "Jupiter",
                  "color": "#6b3542"
                },
                {
                  "name": "Volcan",
                  "color": "#794533"
                },
                {
                  "name": "Sunset",
                  "color": "#af6c1a"
                },
                {
                  "name": "Siri",
                  "color": "#918476"
                },
                {
                  "name": "Glazed Carrot",
                  "color": "#883025"
                },
                {
                  "name": "Living Coral",
                  "color": "#b92932"
                },
                {
                  "name": "Peachy",
                  "color": "#b57266"
                },
                {
                  "name": "Glitter",
                  "color": "#59452f"
                },
                {
                  "name": "Lettuce",
                  "color": "#828238"
                },
                {
                  "name": "Ivy",
                  "color": "#5f6541"
                },
                {
                  "name": "Kris",
                  "color": "#164959"
                },
                {
                  "name": "Pines",
                  "color": "#043035"
                },
                {
                  "name": "Fresco y Seco",
                  "color": "#3a5746"
                },
                {
                  "name": "Aguas",
                  "color": "#3f514f"
                },
                {
                  "name": "Solis",
                  "color": "#315b5e"
                },
                {
                  "name": "Reflecting Pool",
                  "color": "#526664"
                },
                {
                  "name": "Teal Feather",
                  "color": "#1d484c"
                },
                {
                  "name": "Azules",
                  "color": "#404f70"
                },
                {
                  "name": "Bobby Blue",
                  "color": "#3e576c"
                },
                {
                  "name": "Azul Profundo",
                  "color": "#2d3f58"
                },
                {
                  "name": "Paris Night",
                  "color": "#474963"
                },
                {
                  "name": "Hollyhock",
                  "color": "#5e1a5a"
                },
                {
                  "name": "Medusa",
                  "color": "#9b909c"
                },
                {
                  "name": "Purpuras",
                  "color": "#5b425d"
                },
                {
                  "name": "Lavanda",
                  "color": "#5a4856"
                },
                {
                  "name": "VAA",
                  "color": "#383e44"
                },
                {
                  "name": "Purple Mystery",
                  "color": "#3a3054"
                },
                {
                  "name": "Magenta",
                  "color": "#721751"
                },
                {
                  "name": "Syrah Grapes",
                  "color": "#2b1d37"
                },
                {
                  "name": "Plomo",
                  "color": "#46434e"
                },
                {
                  "name": "Gris",
                  "color": "#788798"
                },
                {
                  "name": "Pearl Ten",
                  "color": "#41343b"
                },
                {
                  "name": "Niebla",
                  "color": "#7f7779"
                },
                {
                  "name": "Sand Bank",
                  "color": "#88797c"
                },
                {
                  "name": "Coco",
                  "color": "#4a3a3b"
                },
                {
                  "name": "Natural",
                  "color": "#b2a790"
                },
                {
                  "name": "Black",
                  "color": "#1c1b20"
                },
                {
                  "name": "Piedras",
                  "color": "#5d4742"
                },
                {
                  "name": "Fucsia",
                  "color": "#b50b60"
                },
                {
                  "name": "English Rose",
                  "color": "#9d556d"
                },
                {
                  "name": "Lotus",
                  "color": "#665767"
                },
                {
                  "name": "Cumparsita",
                  "color": "#5f3348"
                },
                {
                  "name": "Water Green",
                  "color": "#70806f"
                },
                {
                  "name": "Ankara Green",
                  "color": "#02a2b7"
                },
                {
                  "name": "Apple Green",
                  "color": "#97962a"
                },
                {
                  "name": "Frank Ochre",
                  "color": "#957714"
                },
                {
                  "name": "Cereza",
                  "color": "#743243"
                },
                {
                  "name": "Sabiduria",
                  "color": "#573452"
                },
                {
                  "name": "Queguay",
                  "color": "#5c4c49"
                },
                {
                  "name": "Yerba",
                  "color": "#5a6f59"
                },
                {
                  "name": "Hojas",
                  "color": "#5b5e43"
                },
                {
                  "name": "Whale's Road",
                  "color": "#40475d"
                },
                {
                  "name": "Aquamarine",
                  "color": "#5a96c7"
                },
                {
                  "name": "Cian",
                  "color": "#00879d"
                },
                {
                  "name": "Matisse Blue",
                  "color": "#141673"
                },
                {
                  "name": "Cirrus Gray",
                  "color": "#484952"
                },
                {
                  "name": "Denim",
                  "color": "#133754"
                },
                {
                  "name": "Blue Jeans",
                  "color": "#133754"
                },
                {
                  "name": "Cowboy",
                  "color": "#18293c"
                },
                {
                  "name": "Cielo y Tierra",
                  "color": "#58525a"
                },
                {
                  "name": "Ilusion",
                  "color": "#785852"
                },
                {
                  "name": "Camel",
                  "color": "#8b5f4b"
                },
                {
                  "name": "Nimbus Gray",
                  "color": "#645857"
                },
                {
                  "name": "Winter Lake",
                  "color": "#5d5352"
                },
                {
                  "name": "Tormenta",
                  "color": "#575557"
                },
                {
                  "name": "Sand Storm",
                  "color": "#584d49"
                },
                {
                  "name": "Cloud Sunshine",
                  "color": "#5b4844"
                },
                {
                  "name": "Tranquilo",
                  "color": "#5a494b"
                },
                {
                  "name": "Pearl",
                  "color": "#706a6a"
                }
              ]
            }
          ],
          "name": "Rios",
          "id": "rios"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "malabrigoyarn.com",
                "url": "https://malabrigoyarn.com/yarns/worsted",
                "accessed": "2022-03-15"
              },
              "colors": [
                {
                  "color": "#621525",
                  "name": "Pagoda"
                },
                {
                  "color": "#7a202b",
                  "name": "Sealing Wax"
                },
                {
                  "color": "#512932",
                  "name": "Burgundy"
                },
                {
                  "color": "#771934",
                  "name": "Geranio"
                },
                {
                  "color": "#661429",
                  "name": "Ravelry Red"
                },
                {
                  "color": "#a11835",
                  "name": "Vermillion"
                },
                {
                  "color": "#a31a2c",
                  "name": "Bergamota"
                },
                {
                  "color": "#973221",
                  "name": "Glazed Carrot"
                },
                {
                  "color": "#903a20",
                  "name": "Rhodesian Ridgeback"
                },
                {
                  "color": "#b74338",
                  "name": "Tiger Lilly"
                },
                {
                  "color": "#ae0044",
                  "name": "Fucsia"
                },
                {
                  "color": "#7a215c",
                  "name": "Very Berry"
                },
                {
                  "color": "#9f436b",
                  "name": "Shocking Pink"
                },
                {
                  "color": "#bc958c",
                  "name": "Rosalinda"
                },
                {
                  "color": "#a2718c",
                  "name": "Pink Frost"
                },
                {
                  "color": "#86466e",
                  "name": "Damask Rose"
                },
                {
                  "color": "#b25e84",
                  "name": "Cactus Flower"
                },
                {
                  "color": "#c9a858",
                  "name": "Pollen"
                },
                {
                  "color": "#d79b23",
                  "name": "Sauterne"
                },
                {
                  "color": "#ad6008",
                  "name": "Sunset"
                },
                {
                  "color": "#cd8e2e",
                  "name": "Cadmium"
                },
                {
                  "color": "#a76f02",
                  "name": "Frank Ochre"
                },
                {
                  "color": "#6a6e23",
                  "name": "Lettuce"
                },
                {
                  "color": "#6a6e23",
                  "name": "Apple Green"
                },
                {
                  "color": "#b9b84f",
                  "name": "Fluo"
                },
                {
                  "color": "#53554e",
                  "name": "Vetiver"
                },
                {
                  "color": "#6b8f90",
                  "name": "Water Green"
                },
                {
                  "color": "#2e4f3d",
                  "name": "Verde Adriana"
                },
                {
                  "color": "#127d13",
                  "name": "Sapphire Green"
                },
                {
                  "color": "#2b5459",
                  "name": "Emerald"
                },
                {
                  "color": "#292c2e",
                  "name": "Cypress"
                },
                {
                  "color": "#12422c",
                  "name": "Forest"
                },
                {
                  "color": "#2a2e2c",
                  "name": "VAA"
                },
                {
                  "color": "#3a3c32",
                  "name": "Olive"
                },
                {
                  "color": "#3a373e",
                  "name": "Black Forest"
                },
                {
                  "color": "#5f85b1",
                  "name": "Blue Surf"
                },
                {
                  "color": "#4868a7",
                  "name": "Jewel Blue"
                },
                {
                  "color": "#4c628d",
                  "name": "Bijou Blue"
                },
                {
                  "color": "#1a5798",
                  "name": "Continental"
                },
                {
                  "color": "#182c6a",
                  "name": "Azul Bolita"
                },
                {
                  "color": "#113e5d",
                  "name": "Tuareg"
                },
                {
                  "color": "#3c5270",
                  "name": "Stone Blue"
                },
                {
                  "color": "#2a5770",
                  "name": "Bobby Blue"
                },
                {
                  "color": "#174555",
                  "name": "Paris Teal"
                },
                {
                  "color": "#02345e",
                  "name": "Azul Profundo"
                },
                {
                  "color": "#27304f",
                  "name": "Paris Night"
                },
                {
                  "color": "#232d54",
                  "name": "Marine"
                },
                {
                  "color": "#3c3f66",
                  "name": "Indigo"
                },
                {
                  "color": "#6869b6",
                  "name": "Periwinkle"
                },
                {
                  "color": "#4f1367",
                  "name": "Purple Magic"
                },
                {
                  "color": "#332640",
                  "name": "Purple Mystery"
                },
                {
                  "color": "#353047",
                  "name": "Violetas"
                },
                {
                  "color": "#644a95",
                  "name": "Jacinto"
                },
                {
                  "color": "#4c3257",
                  "name": "Cuarzo"
                },
                {
                  "color": "#9770a7",
                  "name": "Orchid"
                },
                {
                  "color": "#212d51",
                  "name": "Buscando Azul"
                },
                {
                  "color": "#4a2f4d",
                  "name": "Uva"
                },
                {
                  "color": "#760f52",
                  "name": "Hollyhock"
                },
                {
                  "color": "#b29b94",
                  "name": "Pale Khaki"
                },
                {
                  "color": "#634f50",
                  "name": "Polvoriento"
                },
                {
                  "color": "#886f68",
                  "name": "Simple Taupe"
                },
                {
                  "color": "#767a8f",
                  "name": "Polar Morn"
                },
                {
                  "color": "#8e858f",
                  "name": "Pearl"
                },
                {
                  "color": "#62606c",
                  "name": "Frost Gray"
                },
                {
                  "color": "#473b45",
                  "name": "Pearl Ten"
                },
                {
                  "color": "#b1aa9b",
                  "name": "Natural"
                },
                {
                  "color": "#202020",
                  "name": "Black"
                },
                {
                  "color": "#1a2652",
                  "name": "Whale's Road"
                }
              ]
            }
          ],
          "name": "Worsted",
          "id": "worsted"
        }
      ]
    },
    {
      "name": "Plymouth Yarn",
      "id": "plymouth_yarn",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "plymouthyarn.com",
                "url": "https://www.plymouthyarn.com/yarn/dk-merino-superwash-item-563",
                "accessed": "2023-01-09"
              },
              "colors": [
                {
                  "color": "#d5d9c8",
                  "name": "White"
                },
                {
                  "color": "#cecca9",
                  "name": "Natural"
                },
                {
                  "color": "#a3bcac",
                  "name": "Celantro"
                },
                {
                  "color": "#6988ac",
                  "name": "Cornflower"
                },
                {
                  "color": "#c3b371",
                  "name": "Butter"
                },
                {
                  "color": "#d0a3a8",
                  "name": "Pink"
                },
                {
                  "color": "#181c16",
                  "name": "Black"
                },
                {
                  "color": "#a3916e",
                  "name": "Tan"
                },
                {
                  "color": "#ae872b",
                  "name": "Sunshine"
                },
                {
                  "color": "#1a3023",
                  "name": "Pine"
                },
                {
                  "color": "#142436",
                  "name": "Navy"
                },
                {
                  "color": "#6f030f",
                  "name": "Red"
                },
                {
                  "color": "#71111e",
                  "name": "Wine"
                },
                {
                  "color": "#768378",
                  "name": "Lt Grey"
                },
                {
                  "color": "#202a23",
                  "name": "Dk Grey"
                },
                {
                  "color": "#111d2d",
                  "name": "Denim"
                },
                {
                  "color": "#4c3451",
                  "name": "Lavender"
                },
                {
                  "color": "#470c14",
                  "name": "Fuchsia"
                },
                {
                  "color": "#261432",
                  "name": "Wisteria"
                },
                {
                  "color": "#5b7109",
                  "name": "Peapod"
                },
                {
                  "color": "#a31e0b",
                  "name": "Tangerine"
                },
                {
                  "color": "#a86e7e",
                  "name": "Blush"
                },
                {
                  "color": "#7a5154",
                  "name": "Orchid"
                },
                {
                  "color": "#3b7c6c",
                  "name": "Turquoise"
                },
                {
                  "color": "#14593c",
                  "name": "Green Lake"
                },
                {
                  "color": "#0a1238",
                  "name": "Cobalt"
                },
                {
                  "color": "#4d5b88",
                  "name": "Larkspur"
                },
                {
                  "color": "#f1c40b",
                  "name": "Lemonade"
                },
                {
                  "color": "#825f49",
                  "name": "Straw"
                },
                {
                  "color": "#6e2a1a",
                  "name": "Copper Heather"
                },
                {
                  "color": "#293448",
                  "name": "Denim Heather"
                },
                {
                  "color": "#30261b",
                  "name": "Bark Heather"
                },
                {
                  "color": "#435964",
                  "name": "Lake Blue Heather"
                },
                {
                  "color": "#1d223b",
                  "name": "Navy Heather"
                },
                {
                  "color": "#9e9580",
                  "name": "Natural Heather"
                },
                {
                  "color": "#563e31",
                  "name": "Chipmunk Heather"
                },
                {
                  "color": "#333f25",
                  "name": "Celtic Heather"
                },
                {
                  "color": "#a09e47",
                  "name": "Lime Heather"
                },
                {
                  "color": "#9ea7a7",
                  "name": "Frost"
                },
                {
                  "color": "#37181d",
                  "name": "Burgundy"
                },
                {
                  "color": "#929193",
                  "name": "Glacier Glow"
                },
                {
                  "color": "#a9d645",
                  "name": "Lime Glow"
                },
                {
                  "color": "#1077ae",
                  "name": "Turquoise Glow"
                },
                {
                  "color": "#bb0e88",
                  "name": "Hot Pink Glow"
                }
              ]
            }
          ],
          "name": "DK Merino Superwash",
          "id": "dk_merino_superwash"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "plymouthyarn.com",
                "url": "https://www.plymouthyarn.com/yarn/encore-worsted-item-611",
                "accessed": "2022-03-07"
              },
              "colors": [
                {
                  "color": "#f3c0cb",
                  "name": "Baby Pink"
                },
                {
                  "color": "#0f522d",
                  "name": "Christmas Green"
                },
                {
                  "color": "#1d40a1",
                  "name": "Royal"
                },
                {
                  "color": "#d53b5d",
                  "name": "California Pink"
                },
                {
                  "color": "#d0cdc0",
                  "name": "Winter White "
                },
                {
                  "color": "#a5b2d2",
                  "name": "Periwinkle Heathr"
                },
                {
                  "color": "#cbad33",
                  "name": "Sour Apple"
                },
                {
                  "color": "#86bab7",
                  "name": "Blue Haze"
                },
                {
                  "color": "#123143",
                  "name": "Teal Topaz"
                },
                {
                  "color": "#31132a",
                  "name": "Purple Amethyst"
                },
                {
                  "color": "#7e0916",
                  "name": "Cranberry"
                },
                {
                  "color": "#b73c5a",
                  "name": "Mauve "
                },
                {
                  "color": "#777878",
                  "name": "Medium Grey"
                },
                {
                  "color": "#2d3f38",
                  "name": "Forest Green "
                },
                {
                  "color": "#cbc7bd",
                  "name": "White"
                },
                {
                  "color": "#520b0c",
                  "name": "Cinnabar "
                },
                {
                  "color": "#fbe068",
                  "name": "Yellow "
                },
                {
                  "color": "#131310",
                  "name": "Black"
                },
                {
                  "color": "#d5bb95",
                  "name": "Champagne"
                },
                {
                  "color": "#b69dc5",
                  "name": "Light Lavender "
                },
                {
                  "color": "#3091bb",
                  "name": "Miami Aqua "
                },
                {
                  "color": "#aba390",
                  "name": "Taupe"
                },
                {
                  "color": "#d199a1",
                  "name": "Pink Heather "
                },
                {
                  "color": "#e5dfbc",
                  "name": "Ecru "
                },
                {
                  "color": "#412130",
                  "name": "Garnett Mix"
                },
                {
                  "color": "#404040",
                  "name": "Grayfrost Mix"
                },
                {
                  "color": "#2c313f",
                  "name": "Bluejeans Mix"
                },
                {
                  "color": "#e893ac",
                  "name": "Pink "
                },
                {
                  "color": "#d0da91",
                  "name": "Green"
                },
                {
                  "color": "#7a854e",
                  "name": "Green Gremlin"
                },
                {
                  "color": "#5f9cc8",
                  "name": "Bonnet "
                },
                {
                  "color": "#c1476d",
                  "name": "Carnation"
                },
                {
                  "color": "#317d7d",
                  "name": "Lagoon "
                },
                {
                  "color": "#b46a1e",
                  "name": "Golden Glow"
                },
                {
                  "color": "#c94645",
                  "name": "Living Coral "
                },
                {
                  "color": "#868c8c",
                  "name": "Quarry "
                },
                {
                  "color": "#244e5f",
                  "name": "Storm Blue "
                },
                {
                  "color": "#eede97",
                  "name": "French Vanilla "
                },
                {
                  "color": "#526eac",
                  "name": "Blue Hydrangea "
                },
                {
                  "color": "#840f1d",
                  "name": "Stitch Red "
                },
                {
                  "color": "#bcd546",
                  "name": "Neon Yellow"
                },
                {
                  "color": "#5cd74e",
                  "name": "Neon Green"
                },
                {
                  "color": "#d21358",
                  "name": "Neon Pink"
                },
                {
                  "color": "#ec361d",
                  "name": "Neon Orange"
                },
                {
                  "color": "#1a88b2",
                  "name": "Neon Blue"
                },
                {
                  "color": "#738fa3",
                  "name": "Lt Wedgewood"
                },
                {
                  "color": "#48647d",
                  "name": "Wedgewood"
                },
                {
                  "color": "#253b6a",
                  "name": "Denim Blue "
                },
                {
                  "color": "#252523",
                  "name": "Nghtgrey Heather "
                },
                {
                  "color": "#fbc5c0",
                  "name": "Pale Peach "
                },
                {
                  "color": "#254660",
                  "name": "Dk Wedgewood "
                },
                {
                  "color": "#2b1c18",
                  "name": "Deep Brown "
                },
                {
                  "color": "#324553",
                  "name": "Bluebell "
                },
                {
                  "color": "#2c3b40",
                  "name": "Dark Grnfrstmix"
                },
                {
                  "color": "#737f7f",
                  "name": "Lt Grnfrost Mix"
                },
                {
                  "color": "#4e5c71",
                  "name": "Denim Heather"
                },
                {
                  "color": "#422226",
                  "name": "Wine Heather"
                },
                {
                  "color": "#2d4e4c",
                  "name": "Emerald Heather"
                },
                {
                  "color": "#bba9ab",
                  "name": "Glacier Grey"
                },
                {
                  "color": "#745a61",
                  "name": "Purple Dusk"
                },
                {
                  "color": "#9f614e",
                  "name": "Amber Blush"
                },
                {
                  "color": "#702f27",
                  "name": "Desert Rose"
                },
                {
                  "color": "#91b0cf",
                  "name": "Lite Blue"
                },
                {
                  "color": "#9ec8c0",
                  "name": "Lt Colonial Grn "
                },
                {
                  "color": "#141525",
                  "name": "Navy Blue"
                },
                {
                  "color": "#e1ddb4",
                  "name": "Petal Yellow "
                },
                {
                  "color": "#55181d",
                  "name": "Deep Burgundy"
                },
                {
                  "color": "#75a79b",
                  "name": "Peppermint "
                },
                {
                  "color": "#7f67a3",
                  "name": "Medium Lavender"
                },
                {
                  "color": "#bef2ee",
                  "name": "Pale Green "
                },
                {
                  "color": "#e6d3bb",
                  "name": "Sand "
                },
                {
                  "color": "#8b9580",
                  "name": "Pale Greenhouse"
                },
                {
                  "color": "#698267",
                  "name": "Light Greenhse "
                },
                {
                  "color": "#384b3d",
                  "name": "Greenhouse "
                },
                {
                  "color": "#9888ae",
                  "name": "Beach Berry"
                },
                {
                  "color": "#2d6c76",
                  "name": "Vacation Blues "
                },
                {
                  "color": "#fdb719",
                  "name": "Bright Yellow"
                },
                {
                  "color": "#f04f1d",
                  "name": "Bright Orange"
                },
                {
                  "color": "#38297e",
                  "name": "Bright Purple"
                },
                {
                  "color": "#b6225a",
                  "name": "Bright Fuchsia "
                },
                {
                  "color": "#d30e16",
                  "name": "Christmas Red"
                },
                {
                  "color": "#a69587",
                  "name": "Fawn Mix "
                },
                {
                  "color": "#342723",
                  "name": "Dark Brownheath"
                },
                {
                  "color": "#723922",
                  "name": "Burnished Heather"
                },
                {
                  "color": "#4d3373",
                  "name": "Purple Bell"
                },
                {
                  "color": "#38254d",
                  "name": "Ivy Blue Mix "
                },
                {
                  "color": "#91d366",
                  "name": "Rio Lime "
                },
                {
                  "color": "#4676c2",
                  "name": "Serenity Blue"
                },
                {
                  "color": "#495730",
                  "name": "Shamrock Heather"
                },
                {
                  "color": "#24262e",
                  "name": "Midnight Heather"
                },
                {
                  "color": "#9c9c9c",
                  "name": "Light Grey Heather"
                },
                {
                  "color": "#a55d69",
                  "name": "Rose Bud "
                },
                {
                  "color": "#8d0e15",
                  "name": "Regal Red"
                },
                {
                  "color": "#afa99d",
                  "name": "Dove"
                },
                {
                  "color": "#231629",
                  "name": "Regal"
                },
                {
                  "color": "#0b6154",
                  "name": "Teal A Delphia"
                },
                {
                  "color": "#be1f24",
                  "name": "Tiger Lily"
                },
                {
                  "color": "#6561a6",
                  "name": "Iris"
                },
                {
                  "color": "#175e89",
                  "name": "Laguna Blue"
                },
                {
                  "color": "#dd3a4e",
                  "name": "Poppy"
                },
                {
                  "color": "#522645",
                  "name": "Boysenberry"
                },
                {
                  "color": "#c49692",
                  "name": "Petal Pink"
                },
                {
                  "color": "#a3c4ca",
                  "name": "Tranquil Blue"
                }
              ]
            }
          ],
          "name": "Encore Worsted",
          "id": "encore_worsted"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "plymouthyarn.com",
                "url": "https://www.plymouthyarn.com/yarn/worsted-merino-superwash-item-557",
                "accessed": "2023-01-09"
              },
              "colors": [
                {
                  "color": "#c7c5aa",
                  "name": "Natural"
                },
                {
                  "color": "#151717",
                  "name": "Black"
                },
                {
                  "color": "#630e14",
                  "name": "Red"
                },
                {
                  "color": "#33473d",
                  "name": "Green"
                },
                {
                  "color": "#af7721",
                  "name": "Yellow"
                },
                {
                  "color": "#1a1a35",
                  "name": "Royal"
                },
                {
                  "color": "#5b5757",
                  "name": "Lt Grey"
                },
                {
                  "color": "#202222",
                  "name": "Dk Grey"
                },
                {
                  "color": "#190e26",
                  "name": "Navy"
                },
                {
                  "color": "#511206",
                  "name": "Rust"
                },
                {
                  "color": "#1d0414",
                  "name": "Plum"
                },
                {
                  "color": "#330a0d",
                  "name": "Burgundy"
                },
                {
                  "color": "#776774",
                  "name": "Lavender"
                },
                {
                  "color": "#5b6876",
                  "name": "Cornflower"
                },
                {
                  "color": "#d09d4b",
                  "name": "Butter"
                },
                {
                  "color": "#aa6b59",
                  "name": "Pink"
                },
                {
                  "color": "#202635",
                  "name": "Denim"
                },
                {
                  "color": "#291c21",
                  "name": "Purple"
                },
                {
                  "color": "#4d2612",
                  "name": "Caraway H"
                },
                {
                  "color": "#201a13",
                  "name": "Basil H"
                },
                {
                  "color": "#833251",
                  "name": "Bubblegum"
                },
                {
                  "color": "#938163",
                  "name": "Creme"
                },
                {
                  "color": "#4a4451",
                  "name": "Dusty Violet"
                },
                {
                  "color": "#575c46",
                  "name": "Sage"
                },
                {
                  "color": "#8b0c09",
                  "name": "Watermelon"
                },
                {
                  "color": "#7e1f07",
                  "name": "Pumpkin"
                },
                {
                  "color": "#123531",
                  "name": "Lagoon"
                },
                {
                  "color": "#25625d",
                  "name": "Greenlake"
                },
                {
                  "color": "#2a0f10",
                  "name": "Raisin"
                },
                {
                  "color": "#720b2e",
                  "name": "Fuchsia"
                },
                {
                  "color": "#032849",
                  "name": "Aqua"
                },
                {
                  "color": "#342453",
                  "name": "Periwinkle"
                },
                {
                  "color": "#89a580",
                  "name": "Sea-foam"
                },
                {
                  "color": "#454c48",
                  "name": "Good Grey"
                },
                {
                  "color": "#72080e",
                  "name": "Scarlet"
                },
                {
                  "color": "#0b1315",
                  "name": "True Navy"
                },
                {
                  "color": "#0e1a25",
                  "name": "Dress Blues Navy"
                },
                {
                  "color": "#9c6105",
                  "name": "Gold"
                },
                {
                  "color": "#0b2224",
                  "name": "Teal"
                },
                {
                  "color": "#542c43",
                  "name": "Violet"
                },
                {
                  "color": "#6f5b44",
                  "name": "Fox"
                },
                {
                  "color": "#363e3a",
                  "name": "Med Charcoal"
                },
                {
                  "color": "#859129",
                  "name": "Primavera"
                },
                {
                  "color": "#465c4f",
                  "name": "Slate"
                },
                {
                  "color": "#0d2637",
                  "name": "Cobalt"
                },
                {
                  "color": "#aab29e",
                  "name": "White"
                },
                {
                  "color": "#665141",
                  "name": "Gravel"
                },
                {
                  "color": "#2f3444",
                  "name": "Slate Blue"
                },
                {
                  "color": "#3a391e",
                  "name": "Pesto"
                },
                {
                  "color": "#4f5d7f",
                  "name": "Marina"
                },
                {
                  "color": "#3c381f",
                  "name": "Green Heather"
                },
                {
                  "color": "#9e8d7a",
                  "name": "Natural Heather"
                },
                {
                  "color": "#413b51",
                  "name": "Purple Heather"
                },
                {
                  "color": "#2c431b",
                  "name": "Fern"
                },
                {
                  "color": "#85646e",
                  "name": "Light Orchid"
                },
                {
                  "color": "#29374c",
                  "name": "Denim Heather"
                },
                {
                  "color": "#afaf6c",
                  "name": "Lime Heather"
                },
                {
                  "color": "#293736",
                  "name": "Spruce Heather"
                },
                {
                  "color": "#47939e",
                  "name": "Turquoise Heather"
                },
                {
                  "color": "#843478",
                  "name": "Orchid Heather"
                },
                {
                  "color": "#c17053",
                  "name": "Peach Beach"
                },
                {
                  "color": "#d5b94b",
                  "name": "Lemon"
                },
                {
                  "color": "#8f9091",
                  "name": "Grey Pearl"
                },
                {
                  "color": "#8c7f4d",
                  "name": "Beach Grass"
                },
                {
                  "color": "#b27836",
                  "name": "Sunflower"
                },
                {
                  "color": "#342c39",
                  "name": "Truffle"
                },
                {
                  "color": "#515160",
                  "name": "Moonlight"
                },
                {
                  "color": "#365650",
                  "name": "Blue Spruce"
                },
                {
                  "color": "#aad649",
                  "name": "Lime Green Glow"
                },
                {
                  "color": "#1778af",
                  "name": "Turquoise Glow"
                },
                {
                  "color": "#bc218b",
                  "name": "Hot Pink Glow"
                }
              ]
            }
          ],
          "name": "Worsted Merino Superwash",
          "id": "worsted_merino_superwash"
        }
      ]
    },
    {
      "name": "Premier",
      "id": "premier",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "premieryarns.com",
                "url": "https://www.premieryarns.com/products/dneswsp",
                "accessed": "2022-03-21"
              },
              "colors": [
                {
                  "color": "#cfb175",
                  "name": "Butter",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=39608267571282"
                },
                {
                  "color": "#d48d66",
                  "name": "Peach Blossom",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=39608267472978"
                },
                {
                  "color": "#ca9b8d",
                  "name": "Dogwood",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=39608267669586"
                },
                {
                  "color": "#296078",
                  "name": "Lake",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=39608267636818"
                },
                {
                  "color": "#7c2d2f",
                  "name": "Rosewood",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=39608274026578"
                },
                {
                  "color": "#3a2427",
                  "name": "Grape Jam",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=39608272879698"
                },
                {
                  "color": "#d9580e",
                  "name": "Pumpkin",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=39608273272914"
                },
                {
                  "color": "#6a6251",
                  "name": "Khaki",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=39723520229458"
                },
                {
                  "color": "#eeeee7",
                  "name": "Snow White",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926305734"
                },
                {
                  "color": "#f8e9ce",
                  "name": "Cream",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926305926"
                },
                {
                  "color": "#87a9cd",
                  "name": "Baby Blue",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926303942"
                },
                {
                  "color": "#fbacb6",
                  "name": "Baby Pink",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926305862"
                },
                {
                  "color": "#960b13",
                  "name": "Really Red",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926307142"
                },
                {
                  "color": "#33391e",
                  "name": "Pine Green",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926306246"
                },
                {
                  "color": "#322a96",
                  "name": "Royal Blue",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926304902"
                },
                {
                  "color": "#4a2047",
                  "name": "Aubergine",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926306566"
                },
                {
                  "color": "#141414",
                  "name": "Black",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926306438"
                },
                {
                  "color": "#b27440",
                  "name": "Caramel",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926303750"
                },
                {
                  "color": "#7e920b",
                  "name": "Kiwi",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926305670"
                },
                {
                  "color": "#231a32",
                  "name": "Navy",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926308742"
                },
                {
                  "color": "#a576a2",
                  "name": "Orchid",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926308102"
                },
                {
                  "color": "#a2a2a3",
                  "name": "Mist",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926307590"
                },
                {
                  "color": "#696b6b",
                  "name": "Steel",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926304326"
                },
                {
                  "color": "#f9d503",
                  "name": "Lemon",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926305222"
                },
                {
                  "color": "#d4880f",
                  "name": "Mustard",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926306822"
                },
                {
                  "color": "#54d7b3",
                  "name": "Glass",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926304646"
                },
                {
                  "color": "#046772",
                  "name": "Peacock",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926303814"
                },
                {
                  "color": "#c0a58c",
                  "name": "Cappucino",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926305414"
                },
                {
                  "color": "#edee3b",
                  "name": "Fluorescent Yellow",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926308294"
                },
                {
                  "color": "#930569",
                  "name": "Bright Violet",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926307078"
                },
                {
                  "color": "#f63e07",
                  "name": "Flame Orange",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926307014"
                },
                {
                  "color": "#515f81",
                  "name": "Twilight Blue",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926304070"
                },
                {
                  "color": "#aabcce",
                  "name": "Quiet Blue",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926308230"
                },
                {
                  "color": "#b1cdc0",
                  "name": "Spa",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926304838"
                },
                {
                  "color": "#928677",
                  "name": "Chinchilla",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926308550"
                },
                {
                  "color": "#fc7268",
                  "name": "Coral",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926306950"
                },
                {
                  "color": "#fca691",
                  "name": "Soft Peach",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=23926305542"
                },
                {
                  "color": "#813727",
                  "name": "Rust",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=29625758318674"
                },
                {
                  "color": "#8b5f66",
                  "name": "Rose",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=29625776472146"
                },
                {
                  "color": "#d39729",
                  "name": "Sunshine",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=29625770049618"
                },
                {
                  "color": "#5b403b",
                  "name": "Bark",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=29625777750098"
                },
                {
                  "color": "#7c734e",
                  "name": "Spruce",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=29625776308306"
                },
                {
                  "color": "#550407",
                  "name": "Burgundy",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=29625770475602"
                },
                {
                  "color": "#323240",
                  "name": "Admiral Blue",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=29626049724498"
                },
                {
                  "color": "#e3e1d0",
                  "name": "Aran",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32547545317458"
                },
                {
                  "color": "#072c3c",
                  "name": "Deep Teal",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32547551707218"
                },
                {
                  "color": "#ad8c74",
                  "name": "Parchment",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32547551838290"
                },
                {
                  "color": "#847269",
                  "name": "Dove",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32547632218194"
                },
                {
                  "color": "#acafaa",
                  "name": "Cloudy Day",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32547633037394"
                },
                {
                  "color": "#464546",
                  "name": "Charcoal",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32547635658834"
                },
                {
                  "color": "#a2493d",
                  "name": "Clay",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32547631267922"
                },
                {
                  "color": "#a91b55",
                  "name": "Berry",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32547630088274"
                },
                {
                  "color": "#b398cc",
                  "name": "African Violet",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32547633758290"
                },
                {
                  "color": "#4d4715",
                  "name": "Fern Green",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32547634118738"
                },
                {
                  "color": "#d8cec5",
                  "name": "Linen",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32563017285714"
                },
                {
                  "color": "#8e5d44",
                  "name": "Fawn",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32563017220178"
                },
                {
                  "color": "#f59abb",
                  "name": "Carnation",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32563016302674"
                },
                {
                  "color": "#74a2ad",
                  "name": "Porcelain Blue",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32563018399826"
                },
                {
                  "color": "#5a7a28",
                  "name": "Green Apple",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32547682811986"
                },
                {
                  "color": "#cdcfd2",
                  "name": "Silver",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32563017449554"
                },
                {
                  "color": "#2d416e",
                  "name": "Blueberry",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32547681632338"
                },
                {
                  "color": "#d66c72",
                  "name": "Azalea",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=32547684155474"
                },
                {
                  "color": "#4d2d23",
                  "name": "Walnut",
                  "url": "https://www.premieryarns.com/products/dneswsp?variant=39608267014226"
                }
              ]
            }
          ],
          "name": "Anti-Pilling Everyday Worsted",
          "id": "anti_pilling_everyday_worsted"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "premieryarns.com",
                "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235302940754",
                "accessed": "2022-03-21"
              },
              "colors": [
                {
                  "color": "#641F24",
                  "name": "Cabernet",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235302940754"
                },
                {
                  "color": "#8F1D17",
                  "name": "Harvest Nights",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235412877394"
                },
                {
                  "color": "#C15E32",
                  "name": "Orange Blossom",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235418415186"
                },
                {
                  "color": "#D7963E",
                  "name": "Calypso",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235418480722"
                },
                {
                  "color": "#AE893C",
                  "name": "Tuscan Sun",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235418153042"
                },
                {
                  "color": "#D8C691",
                  "name": "Pineapple Martini",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235418447954"
                },
                {
                  "color": "#64814C",
                  "name": "Seagrass",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235418579026"
                },
                {
                  "color": "#546C54",
                  "name": "Fiddle Leaf Fig",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235418284114"
                },
                {
                  "color": "#25594C",
                  "name": "Earth Day",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235418513490"
                },
                {
                  "color": "#322D18",
                  "name": "Pine Forest",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235418644562"
                },
                {
                  "color": "#357986",
                  "name": "Blue Waters",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235418611794"
                },
                {
                  "color": "#254453",
                  "name": "Summer Vacation",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235418316882"
                },
                {
                  "color": "#255875",
                  "name": "Capri",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235418382418"
                },
                {
                  "color": "#225191",
                  "name": "Lake Days",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235418218578"
                },
                {
                  "color": "#A5B0B9",
                  "name": "Platinum",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235432210514"
                },
                {
                  "color": "#9CA2BF",
                  "name": "Worn In Jeans",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235432374354"
                },
                {
                  "color": "#393B56",
                  "name": "Grape Crush",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235432243282"
                },
                {
                  "color": "#95A3C6",
                  "name": "Endless Nights",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235432538194"
                },
                {
                  "color": "#1E1626",
                  "name": "Rumba",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235441418322"
                },
                {
                  "color": "#351429",
                  "name": "Sangria",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235441385554"
                },
                {
                  "color": "#705869",
                  "name": "Royalty",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235441287250"
                },
                {
                  "color": "#A57075",
                  "name": "In Love",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235441188946"
                },
                {
                  "color": "#B2A4AC",
                  "name": "Sweet",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235441221714"
                },
                {
                  "color": "#6B1634",
                  "name": "Lipstick",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235441123410"
                },
                {
                  "color": "#592118",
                  "name": "Passion",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235441483858"
                },
                {
                  "color": "#70261D",
                  "name": "Bonfire",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235441352786"
                },
                {
                  "color": "#814C3E",
                  "name": "Rouge",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235445186642"
                },
                {
                  "color": "#552E1F",
                  "name": "Comfort",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235445547090"
                },
                {
                  "color": "#64453C",
                  "name": "Morning Coffee",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235445514322"
                },
                {
                  "color": "#382E2B",
                  "name": "Trail's End",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235445612626"
                },
                {
                  "color": "#18151A",
                  "name": "Intrigue",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235445088338"
                },
                {
                  "color": "#9F9F9E",
                  "name": "Sweater Weather",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235445383250"
                },
                {
                  "color": "#928F91",
                  "name": "Wisdom",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235445481554"
                },
                {
                  "color": "#9A908F",
                  "name": "Toes In The Sand",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235445252178"
                },
                {
                  "color": "#A29588",
                  "name": "Rainy Day",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235445121106"
                },
                {
                  "color": "#ECE9E0",
                  "name": "Pearl",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33235445153874"
                },
                {
                  "color": "#C18F31",
                  "name": "Sunflower",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33244614721618"
                },
                {
                  "color": "#7E7F2E",
                  "name": "Margarita",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33244614918226"
                },
                {
                  "color": "#4D8856",
                  "name": "Jade",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33244614623314"
                },
                {
                  "color": "#65937B",
                  "name": "Seafoam",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33244614852690"
                },
                {
                  "color": "#548AA4",
                  "name": "Southern Sky",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33244614819922"
                },
                {
                  "color": "#6B2140",
                  "name": "Rosy",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33244614885458"
                },
                {
                  "color": "#9B3147",
                  "name": "Hibiscus",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33244614754386"
                },
                {
                  "color": "#C59396",
                  "name": "Cotton Candy",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33244614787154"
                },
                {
                  "color": "#595047",
                  "name": "Mink",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33244623077458"
                },
                {
                  "color": "#9C9C9D",
                  "name": "City Streets",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33244622913618"
                },
                {
                  "color": "#C5B18E",
                  "name": "Sugar Cookie",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33244622979154"
                },
                {
                  "color": "#161616",
                  "name": "Opera",
                  "url": "https://www.premieryarns.com/collections/stitch-please/products/spworswash?variant=33244623044690"
                }
              ]
            }
          ],
          "name": "Stitch Please Superwash Worsted",
          "id": "stitch_please_superwash_worsted"
        }
      ]
    },
    {
      "name": "Red Heart",
      "id": "red_heart",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "yarnspirations.com",
                "url": "https://www.yarnspirations.com/red-heart-super-saver-yarn/E300.html",
                "accessed": "2022-03-07"
              },
              "colors": [
                {
                  "name": "Soft White",
                  "color": "#e5e6e1"
                },
                {
                  "name": "White",
                  "color": "#e7e7e6"
                },
                {
                  "name": "Aran",
                  "color": "#F0F0EC"
                },
                {
                  "name": "Buff",
                  "color": "#b2a28c"
                },
                {
                  "name": "Baby Pink",
                  "color": "#F5D1D8"
                },
                {
                  "name": "Light Raspberry",
                  "color": "#c87d8c"
                },
                {
                  "name": "Grenadine",
                  "color": "#BD2D60"
                },
                {
                  "name": "Persimmon",
                  "color": "#EA7C81"
                },
                {
                  "name": "Pretty N' Pink",
                  "color": "#EB7D9F"
                },
                {
                  "name": "Rosy",
                  "color": "#D29C9D"
                },
                {
                  "name": "Perfect Pink",
                  "color": "#D9A6B3"
                },
                {
                  "name": "Mulberry",
                  "color": "#511638"
                },
                {
                  "name": "Cherry Red",
                  "color": "#932936"
                },
                {
                  "name": "Claret",
                  "color": "#411E2D"
                },
                {
                  "name": "Hot Red",
                  "color": "#A22C3D"
                },
                {
                  "name": "Burgundy",
                  "color": "#571324"
                },
                {
                  "name": "Carrot",
                  "color": "#E17F59"
                },
                {
                  "name": "Flame",
                  "color": "#D75840"
                },
                {
                  "name": "Coral",
                  "color": "#BD6D57"
                },
                {
                  "name": "Flamingo",
                  "color": "#E5676C"
                },
                {
                  "name": "Pumpkin",
                  "color": "#D8824F"
                },
                {
                  "name": "Bright Yellow",
                  "color": "#edd354"
                },
                {
                  "name": "Cornmeal",
                  "color": "#E4CEA1"
                },
                {
                  "name": "Lemon",
                  "color": "#F0E1A8"
                },
                {
                  "name": "Pale Yellow",
                  "color": "#EEEBB2"
                },
                {
                  "name": "Saffron",
                  "color": "#EEAC4D"
                },
                {
                  "name": "Frosty Green",
                  "color": "#A8A88F"
                },
                {
                  "name": "Light Sage",
                  "color": "#7A8F81"
                },
                {
                  "name": "Spring Green",
                  "color": "#8BB96C"
                },
                {
                  "name": "Hunter Green",
                  "color": "#1E4136"
                },
                {
                  "name": "Medium Thyme",
                  "color": "#616D56"
                },
                {
                  "name": "Paddy Green",
                  "color": "#1F4138"
                },
                {
                  "name": "Tea Leaf",
                  "color": "#7E9467"
                },
                {
                  "name": "Jade",
                  "color": "#436C6A"
                },
                {
                  "name": "Minty",
                  "color": "#BAE6DE"
                },
                {
                  "name": "Aruba Sea",
                  "color": "#A0D1C5"
                },
                {
                  "name": "Country Blue",
                  "color": "#97B8C5"
                },
                {
                  "name": "Delft Blue",
                  "color": "#4F73A3"
                },
                {
                  "name": "Light Blue",
                  "color": "#D2DEEA"
                },
                {
                  "name": "Light Periwinkle",
                  "color": "#95AAC7"
                },
                {
                  "name": "Turqua",
                  "color": "#5EB1BB"
                },
                {
                  "name": "Pool",
                  "color": "#377A92"
                },
                {
                  "name": "Blue",
                  "color": "#3b6cb2"
                },
                {
                  "name": "Denim",
                  "color": "#404464"
                },
                {
                  "name": "Royal",
                  "color": "#2E4485"
                },
                {
                  "name": "Soft Navy",
                  "color": "#2D3253"
                },
                {
                  "name": "Light Jasmine",
                  "color": "#BBB0D3"
                },
                {
                  "name": "Lavender",
                  "color": "#8982B1"
                },
                {
                  "name": "Medium Purple",
                  "color": "#86668A"
                },
                {
                  "name": "Orchid",
                  "color": "#B497B6"
                },
                {
                  "name": "Pale Plum",
                  "color": "#DFD5DC"
                },
                {
                  "name": "Amethyst",
                  "color": "#36136B"
                },
                {
                  "name": "Light Gray",
                  "color": "#C2C7CF"
                },
                {
                  "name": "Dusty Gray",
                  "color": "#989CA2"
                },
                {
                  "name": "Charcoal",
                  "color": "#46484F"
                },
                {
                  "name": "Dark Orchid",
                  "color": "#502759"
                },
                {
                  "name": "Gold",
                  "color": "#DBAA65"
                },
                {
                  "name": "Real Teal",
                  "color": "#265664"
                },
                {
                  "name": "Shocking Pink",
                  "color": "#AE2E5A"
                },
                {
                  "name": "Café Latte",
                  "color": "#6D5F52"
                },
                {
                  "name": "Coffee",
                  "color": "#342421"
                },
                {
                  "name": "Oatmeal",
                  "color": "#D6D1CD"
                },
                {
                  "name": "Gray",
                  "color": "#C2C4CC"
                },
                {
                  "name": "Gray Heather",
                  "color": "#7A7E83"
                },
                {
                  "name": "Black",
                  "color": "#0E0E12"
                }
              ]
            }
          ],
          "name": "Super Saver Solids",
          "id": "super_saver_solids"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "yarnspirations.com",
                "url": "https://www.yarnspirations.com/red-heart-with-love-yarn/E400.html",
                "accessed": "2023-02-17"
              },
              "colors": [
                {
                  "color": "#e9e9e9",
                  "name": "White"
                },
                {
                  "color": "#846da5",
                  "name": "Lilac"
                },
                {
                  "color": "#7a928f",
                  "name": "Sage"
                },
                {
                  "color": "#6987a2",
                  "name": "Bluebell"
                },
                {
                  "color": "#e78c9c",
                  "name": "Bubblegum"
                },
                {
                  "color": "#c38c99",
                  "name": "Cameo"
                },
                {
                  "color": "#afddd5",
                  "name": "Minty"
                },
                {
                  "color": "#81b8bd",
                  "name": "Iced Aqua"
                },
                {
                  "color": "#ebd983",
                  "name": "Daffodil"
                },
                {
                  "color": "#d2b271",
                  "name": "Cornsilk"
                },
                {
                  "color": "#531928",
                  "name": "Berry Red"
                },
                {
                  "color": "#a39178",
                  "name": "Tan"
                },
                {
                  "color": "#5b5b60",
                  "name": "Pewter"
                },
                {
                  "color": "#277289",
                  "name": "Blue Hawaii"
                },
                {
                  "color": "#62724d",
                  "name": "Lettuce"
                },
                {
                  "color": "#0d4a60",
                  "name": "Mallard"
                },
                {
                  "color": "#083130",
                  "name": "Evergreen"
                },
                {
                  "color": "#0e1338",
                  "name": "Navy"
                },
                {
                  "color": "#440b30",
                  "name": "Boysenberry"
                },
                {
                  "color": "#3a0e21",
                  "name": "Merlot"
                },
                {
                  "color": "#121116",
                  "name": "Black"
                },
                {
                  "color": "#ddded9",
                  "name": "Eggshell"
                },
                {
                  "color": "#271d1a",
                  "name": "Chocolate"
                },
                {
                  "color": "#aeadae",
                  "name": "Light Gray"
                },
                {
                  "color": "#11253b",
                  "name": "Peacock"
                },
                {
                  "color": "#3a1948",
                  "name": "Aubergine"
                },
                {
                  "color": "#6f1429",
                  "name": "Holly Berry"
                },
                {
                  "color": "#36568a",
                  "name": "Deep Blues"
                },
                {
                  "color": "#9aada7",
                  "name": "Beachy"
                },
                {
                  "color": "#808870",
                  "name": "Sandbar Stripe"
                },
                {
                  "color": "#1b6155",
                  "name": "Fiji Stripe"
                },
                {
                  "color": "#b57547",
                  "name": "Tangerine"
                },
                {
                  "color": "#4d513c",
                  "name": "Spinach"
                },
                {
                  "color": "#273c53",
                  "name": "Celtic"
                },
                {
                  "color": "#dcaccd",
                  "name": "Blush"
                }
              ]
            }
          ],
          "name": "With Love",
          "id": "with_love"
        }
      ]
    },
    {
      "name": "Rowan",
      "id": "rowan",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "knitrowan.com",
                "url": "https://knitrowan.com/products/felted-tweed",
                "accessed": "2023-01-09"
              },
              "colors": [
                {
                  "color": "#4a2f32",
                  "name": "Treacle"
                },
                {
                  "color": "#892038",
                  "name": "Rage"
                },
                {
                  "color": "#4d2a48",
                  "name": "Bilberry"
                },
                {
                  "color": "#1d6171",
                  "name": "Watery"
                },
                {
                  "color": "#493229",
                  "name": "Phantom"
                },
                {
                  "color": "#9b3927",
                  "name": "Ginger"
                },
                {
                  "color": "#a27e73",
                  "name": "Camel"
                },
                {
                  "color": "#28433c",
                  "name": "Pine"
                },
                {
                  "color": "#3f3e4a",
                  "name": "Carbon"
                },
                {
                  "color": "#898440",
                  "name": "Avocado"
                },
                {
                  "color": "#abaec0",
                  "name": "Scree"
                },
                {
                  "color": "#52729a",
                  "name": "Maritime"
                },
                {
                  "color": "#534f4e",
                  "name": "Ancient"
                },
                {
                  "color": "#6c7988",
                  "name": "Duck Egg"
                },
                {
                  "color": "#73543d",
                  "name": "Cinnamon"
                },
                {
                  "color": "#3a4b6a",
                  "name": "Seasalter"
                },
                {
                  "color": "#cda358",
                  "name": "Mineral"
                },
                {
                  "color": "#85406f",
                  "name": "Peony"
                },
                {
                  "color": "#7a8972",
                  "name": "Celadon"
                },
                {
                  "color": "#d1adbb",
                  "name": "Frozen"
                },
                {
                  "color": "#752c46",
                  "name": "Tawny"
                },
                {
                  "color": "#b5a590",
                  "name": "Stone"
                },
                {
                  "color": "#807c89",
                  "name": "Granite"
                },
                {
                  "color": "#6c5874",
                  "name": "Amethyst"
                },
                {
                  "color": "#bc8f53",
                  "name": "Cumin"
                },
                {
                  "color": "#5a717b",
                  "name": "Delft"
                },
                {
                  "color": "#746464",
                  "name": "Boulder"
                },
                {
                  "color": "#5f342d",
                  "name": "Barn Red"
                },
                {
                  "color": "#cdc8c7",
                  "name": "Alabaster"
                },
                {
                  "color": "#c24233",
                  "name": "Zinnia"
                },
                {
                  "color": "#b45e72",
                  "name": "Pink Bliss"
                },
                {
                  "color": "#66678D",
                  "name": "Iris"
                },
                {
                  "color": "#9F4760",
                  "name": "Barbara"
                },
                {
                  "color": "#275f69",
                  "name": "Turquoise"
                },
                {
                  "color": "#417c64",
                  "name": "Electric Green"
                },
                {
                  "color": "#8DAF98",
                  "name": "Vaseline Green"
                },
                {
                  "color": "#4a532c",
                  "name": "Lotus Leaf"
                },
                {
                  "color": "#968982",
                  "name": "Aluminium"
                },
                {
                  "color": "#837067",
                  "name": "Rose Quartz"
                },
                {
                  "color": "#3D4342",
                  "name": "Bottle Green"
                },
                {
                  "color": "#865F76",
                  "name": "Iolite"
                },
                {
                  "color": "#8B9A91",
                  "name": "Eden"
                },
                {
                  "color": "#1e1d21",
                  "name": "Black"
                },
                {
                  "color": "#b6746e",
                  "name": "Peach"
                },
                {
                  "color": "#909d67",
                  "name": "Lime"
                },
                {
                  "color": "#718AB8",
                  "name": "Ciel"
                },
                {
                  "color": "#282D55",
                  "name": "Ultramarine"
                },
                {
                  "color": "#64502A",
                  "name": "French Mustard"
                },
                {
                  "color": "#7A7195",
                  "name": "Astor"
                },
                {
                  "color": "#78a0b4",
                  "name": "Fjord"
                },
                {
                  "color": "#a481af",
                  "name": "Heliotope"
                },
                {
                  "color": "#bbaa50",
                  "name": "Sulfur"
                },
                {
                  "color": "#b387e6",
                  "name": "Candy Floss"
                },
                {
                  "color": "#8B3337",
                  "name": "Scarlet"
                },
                {
                  "color": "#2b2838",
                  "name": "Seafarer"
                },
                {
                  "color": "#c7bcbb",
                  "name": "Clay"
                }
              ]
            }
          ],
          "name": "Felted Tweed",
          "id": "felted_tweed"
        }
      ]
    },
    {
      "name": "Sandnes",
      "id": "sandnes",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "sandnes-garn.com",
                "url": "https://www.sandnes-garn.com/petiteknit-dobbel-sunday",
                "accessed": "2023-01-06"
              },
              "colors": [
                {
                  "color": "#e9e2d0",
                  "name": "Whipped Cream"
                },
                {
                  "color": "#f0dcad",
                  "name": "Banana"
                },
                {
                  "color": "#9a602f",
                  "name": "Croissant"
                },
                {
                  "color": "#e1cfb9",
                  "name": "Almond"
                },
                {
                  "color": "#ad8b6d",
                  "name": "Camel"
                },
                {
                  "color": "#e0bcb1",
                  "name": "Ballet Shoes"
                },
                {
                  "color": "#a2675a",
                  "name": "Dusty Rouge"
                },
                {
                  "color": "#de2915",
                  "name": "That Orange Feeling"
                },
                {
                  "color": "#c5b4a6",
                  "name": "Cardamom"
                },
                {
                  "color": "#4d2f2e",
                  "name": "Coffee Bean"
                },
                {
                  "color": "#171824",
                  "name": "Sailor In The Dark"
                },
                {
                  "color": "#bdcecf",
                  "name": "Pale Blue"
                },
                {
                  "color": "#03488e",
                  "name": "Electric Blue"
                },
                {
                  "color": "#7e9085",
                  "name": "Eucalyptus"
                },
                {
                  "color": "#108f53",
                  "name": "Statement Green"
                },
                {
                  "color": "#3f392a",
                  "name": "Into The Woods"
                }
              ]
            }
          ],
          "name": "Petiteknit Double Sunday",
          "id": "petiteknit_double_sunday"
        }
      ]
    },
    {
      "name": "Scheepjes",
      "id": "scheepjes",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "scheepjes.com",
                "url": "https://www.scheepjes.com/en/cahlista-2342/",
                "accessed": "2022-12-30"
              },
              "colors": [
                {
                  "color": "#c13055",
                  "name": "Cherry"
                },
                {
                  "color": "#e3467b",
                  "name": "Shocking Pink"
                },
                {
                  "color": "#e5525d",
                  "name": "Cornelia Rose"
                },
                {
                  "color": "#f0abc3",
                  "name": "Tulip"
                },
                {
                  "color": "#e7878a",
                  "name": "Soft Rose"
                },
                {
                  "color": "#e882a9",
                  "name": "Freesia"
                },
                {
                  "color": "#cca8c4",
                  "name": "Lavender"
                },
                {
                  "color": "#d1acc8",
                  "name": "Light Orchid"
                },
                {
                  "color": "#e7a1a1",
                  "name": "Marshmallow"
                },
                {
                  "color": "#eec3c7",
                  "name": "Icy Pink"
                },
                {
                  "color": "#f6d2d2",
                  "name": "Powder Pink"
                },
                {
                  "color": "#a83720",
                  "name": "Rust"
                },
                {
                  "color": "#ab5841",
                  "name": "Brick Red"
                },
                {
                  "color": "#ea572e",
                  "name": "Royal Orange"
                },
                {
                  "color": "#eb6927",
                  "name": "Tangerine"
                },
                {
                  "color": "#ef884e",
                  "name": "Peach"
                },
                {
                  "color": "#ee9a6d",
                  "name": "Apricot"
                },
                {
                  "color": "#d39b72",
                  "name": "Camel"
                },
                {
                  "color": "#f1b284",
                  "name": "Vintage Peach"
                },
                {
                  "color": "#f2d6ba",
                  "name": "Shell"
                },
                {
                  "color": "#f5cbaf",
                  "name": "Sweet Mandarin"
                },
                {
                  "color": "#f4d6bf",
                  "name": "Petal Peach"
                },
                {
                  "color": "#263d30",
                  "name": "Fir"
                },
                {
                  "color": "#2c4c48",
                  "name": "Spruce"
                },
                {
                  "color": "#3b635d",
                  "name": "Deep Ocean"
                },
                {
                  "color": "#156364",
                  "name": "Dark Teal"
                },
                {
                  "color": "#15687e",
                  "name": "Petrol Blue"
                },
                {
                  "color": "#0e99bb",
                  "name": "Vivid Blue"
                },
                {
                  "color": "#72b1c4",
                  "name": "Sky Blue"
                },
                {
                  "color": "#7bcad3",
                  "name": "Cyan"
                },
                {
                  "color": "#3ca480",
                  "name": "Jade"
                },
                {
                  "color": "#62b59f",
                  "name": "Tropic"
                },
                {
                  "color": "#9acfb3",
                  "name": "Crystalline"
                },
                {
                  "color": "#3b281b",
                  "name": "Black Coffee"
                },
                {
                  "color": "#58473a",
                  "name": "Chocolate"
                },
                {
                  "color": "#774a2c",
                  "name": "Root Beer"
                },
                {
                  "color": "#94674b",
                  "name": "Hazelnut"
                },
                {
                  "color": "#88745c",
                  "name": "Moon Rock"
                },
                {
                  "color": "#aa886b",
                  "name": "Caramel"
                },
                {
                  "color": "#bea799",
                  "name": "Soft Beige"
                },
                {
                  "color": "#c2a99d",
                  "name": "Antique Mauve"
                },
                {
                  "color": "#e3dabb",
                  "name": "Linen"
                },
                {
                  "color": "#c4bb9f",
                  "name": "Champagne"
                },
                {
                  "color": "#e6ce96",
                  "name": "English Tea"
                },
                {
                  "color": "#c6c7d2",
                  "name": "Lilac Mist"
                },
                {
                  "color": "#c57792",
                  "name": "Colonial Rose"
                },
                {
                  "color": "#b75480",
                  "name": "Garden Rose"
                },
                {
                  "color": "#9c6b83",
                  "name": "Amethyst"
                },
                {
                  "color": "#6d4c4f",
                  "name": "Ashes"
                },
                {
                  "color": "#793c6c",
                  "name": "Ultra Violet"
                },
                {
                  "color": "#785c8f",
                  "name": "Delphinium"
                },
                {
                  "color": "#535181",
                  "name": "Deep Amethyst"
                },
                {
                  "color": "#52346d",
                  "name": "Deep Violet"
                },
                {
                  "color": "#842c55",
                  "name": "Tyrian Purple"
                },
                {
                  "color": "#5b2d3f",
                  "name": "Shadow Purple"
                },
                {
                  "color": "#e2a79c",
                  "name": "Old Rose"
                },
                {
                  "color": "#f0a497",
                  "name": "Light Coral"
                },
                {
                  "color": "#ec855b",
                  "name": "Rich Coral"
                },
                {
                  "color": "#e55953",
                  "name": "Watermelon"
                },
                {
                  "color": "#cb2c3a",
                  "name": "Candy Apple"
                },
                {
                  "color": "#d32d1c",
                  "name": "Poppy Rose"
                },
                {
                  "color": "#d32126",
                  "name": "Hot Red"
                },
                {
                  "color": "#c94552",
                  "name": "Rosewood"
                },
                {
                  "color": "#9a4b4a",
                  "name": "Rose Wine"
                },
                {
                  "color": "#9a183a",
                  "name": "Scarlet"
                },
                {
                  "color": "#8c1a33",
                  "name": "Ruby"
                },
                {
                  "color": "#f4f3ec",
                  "name": "Snow White"
                },
                {
                  "color": "#c4e2e5",
                  "name": "Baby Blue"
                },
                {
                  "color": "#c4e4e9",
                  "name": "Bluebell"
                },
                {
                  "color": "#61a4ce",
                  "name": "Powder Blue"
                },
                {
                  "color": "#5aa9d2",
                  "name": "Cornflower"
                },
                {
                  "color": "#7a9fbd",
                  "name": "Bluebird"
                },
                {
                  "color": "#52729f",
                  "name": "Capri Blue"
                },
                {
                  "color": "#165d9c",
                  "name": "Electric Blue"
                },
                {
                  "color": "#284b62",
                  "name": "Light Navy"
                },
                {
                  "color": "#1f3159",
                  "name": "Midnight"
                },
                {
                  "color": "#142130",
                  "name": "Ultramarine"
                },
                {
                  "color": "#fbf4b3",
                  "name": "Candle Light"
                },
                {
                  "color": "#dbdc82",
                  "name": "Lime Juice"
                },
                {
                  "color": "#f7f1a5",
                  "name": "Lemon Chiffon"
                },
                {
                  "color": "#efd677",
                  "name": "Lemonade"
                },
                {
                  "color": "#f6de6c",
                  "name": "Primrose"
                },
                {
                  "color": "#f8e234",
                  "name": "Lemon"
                },
                {
                  "color": "#f3ad31",
                  "name": "Yellow Gold"
                },
                {
                  "color": "#cb944f",
                  "name": "Topaz"
                },
                {
                  "color": "#e1951a",
                  "name": "Saffron"
                },
                {
                  "color": "#ee8c34",
                  "name": "Sweet Orange"
                },
                {
                  "color": "#ba651e",
                  "name": "Ginger Gold"
                },
                {
                  "color": "#c9c956",
                  "name": "Lime"
                },
                {
                  "color": "#c8c232",
                  "name": "Green Yellow"
                },
                {
                  "color": "#9bb637",
                  "name": "Kiwi"
                },
                {
                  "color": "#9bb637",
                  "name": "Sage Green"
                },
                {
                  "color": "#8cbf61",
                  "name": "Apple Granny"
                },
                {
                  "color": "#43a653",
                  "name": "Apple Green"
                },
                {
                  "color": "#42a778",
                  "name": "Parrot Green"
                },
                {
                  "color": "#3d8d47",
                  "name": "Emerald"
                },
                {
                  "color": "#77a652",
                  "name": "Forest Green"
                },
                {
                  "color": "#8a7f45",
                  "name": "Willow"
                },
                {
                  "color": "#5b5444",
                  "name": "Dark Olive"
                },
                {
                  "color": "#f3efe2",
                  "name": "Bridal White"
                },
                {
                  "color": "#f7f1d7",
                  "name": "Old Lace"
                },
                {
                  "color": "#b8cbb1",
                  "name": "Silver Green"
                },
                {
                  "color": "#809c8c",
                  "name": "Silver Blue"
                },
                {
                  "color": "#dee1cf",
                  "name": "Light Silver"
                },
                {
                  "color": "#c1c0c3",
                  "name": "Mercury"
                },
                {
                  "color": "#656865",
                  "name": "Metal Grey"
                },
                {
                  "color": "#575956",
                  "name": "Anthracite"
                },
                {
                  "color": "#474e54",
                  "name": "Charcoal"
                },
                {
                  "color": "#121212",
                  "name": "Jet Black"
                }
              ]
            }
          ],
          "name": "Cahlista",
          "id": "cahlista"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "scheepjes.com",
                "url": "https://www.scheepjes.com/en/catona-50g-322/",
                "accessed": "2022-12-30"
              },
              "colors": [
                {
                  "color": "#c13055",
                  "name": "Cherry"
                },
                {
                  "color": "#e3467b",
                  "name": "Shocking Pink"
                },
                {
                  "color": "#e5525d",
                  "name": "Cornelia Rose"
                },
                {
                  "color": "#f0abc3",
                  "name": "Tulip"
                },
                {
                  "color": "#e7878a",
                  "name": "Soft Rose"
                },
                {
                  "color": "#e882a9",
                  "name": "Freesia"
                },
                {
                  "color": "#cca8c4",
                  "name": "Lavender"
                },
                {
                  "color": "#d1acc8",
                  "name": "Light Orchid"
                },
                {
                  "color": "#e7a1a1",
                  "name": "Marshmallow"
                },
                {
                  "color": "#eec3c7",
                  "name": "Icy Pink"
                },
                {
                  "color": "#f6d2d2",
                  "name": "Powder Pink"
                },
                {
                  "color": "#a83720",
                  "name": "Rust"
                },
                {
                  "color": "#ab5841",
                  "name": "Brick Red"
                },
                {
                  "color": "#ea572e",
                  "name": "Royal Orange"
                },
                {
                  "color": "#eb6927",
                  "name": "Tangerine"
                },
                {
                  "color": "#ef884e",
                  "name": "Peach"
                },
                {
                  "color": "#ee9a6d",
                  "name": "Apricot"
                },
                {
                  "color": "#d39b72",
                  "name": "Camel"
                },
                {
                  "color": "#f1b284",
                  "name": "Vintage Peach"
                },
                {
                  "color": "#f2d6ba",
                  "name": "Shell"
                },
                {
                  "color": "#f5cbaf",
                  "name": "Sweet Mandarin"
                },
                {
                  "color": "#f4d6bf",
                  "name": "Petal Peach"
                },
                {
                  "color": "#263d30",
                  "name": "Fir"
                },
                {
                  "color": "#2c4c48",
                  "name": "Spruce"
                },
                {
                  "color": "#3b635d",
                  "name": "Deep Ocean"
                },
                {
                  "color": "#156364",
                  "name": "Dark Teal"
                },
                {
                  "color": "#15687e",
                  "name": "Petrol Blue"
                },
                {
                  "color": "#0e99bb",
                  "name": "Vivid Blue"
                },
                {
                  "color": "#72b1c4",
                  "name": "Sky Blue"
                },
                {
                  "color": "#7bcad3",
                  "name": "Cyan"
                },
                {
                  "color": "#3ca480",
                  "name": "Jade"
                },
                {
                  "color": "#62b59f",
                  "name": "Tropic"
                },
                {
                  "color": "#9acfb3",
                  "name": "Crystalline"
                },
                {
                  "color": "#3b281b",
                  "name": "Black Coffee"
                },
                {
                  "color": "#58473a",
                  "name": "Chocolate"
                },
                {
                  "color": "#774a2c",
                  "name": "Root Beer"
                },
                {
                  "color": "#94674b",
                  "name": "Hazelnut"
                },
                {
                  "color": "#88745c",
                  "name": "Moon Rock"
                },
                {
                  "color": "#aa886b",
                  "name": "Caramel"
                },
                {
                  "color": "#bea799",
                  "name": "Soft Beige"
                },
                {
                  "color": "#c2a99d",
                  "name": "Antique Mauve"
                },
                {
                  "color": "#e3dabb",
                  "name": "Linen"
                },
                {
                  "color": "#c4bb9f",
                  "name": "Champagne"
                },
                {
                  "color": "#e6ce96",
                  "name": "English Tea"
                },
                {
                  "color": "#c6c7d2",
                  "name": "Lilac Mist"
                },
                {
                  "color": "#c57792",
                  "name": "Colonial Rose"
                },
                {
                  "color": "#b75480",
                  "name": "Garden Rose"
                },
                {
                  "color": "#9c6b83",
                  "name": "Amethyst"
                },
                {
                  "color": "#6d4c4f",
                  "name": "Ashes"
                },
                {
                  "color": "#793c6c",
                  "name": "Ultra Violet"
                },
                {
                  "color": "#785c8f",
                  "name": "Delphinium"
                },
                {
                  "color": "#535181",
                  "name": "Deep Amethyst"
                },
                {
                  "color": "#52346d",
                  "name": "Deep Violet"
                },
                {
                  "color": "#842c55",
                  "name": "Tyrian Purple"
                },
                {
                  "color": "#5b2d3f",
                  "name": "Shadow Purple"
                },
                {
                  "color": "#e2a79c",
                  "name": "Old Rose"
                },
                {
                  "color": "#f0a497",
                  "name": "Light Coral"
                },
                {
                  "color": "#ec855b",
                  "name": "Rich Coral"
                },
                {
                  "color": "#e55953",
                  "name": "Watermelon"
                },
                {
                  "color": "#cb2c3a",
                  "name": "Candy Apple"
                },
                {
                  "color": "#d32d1c",
                  "name": "Poppy Rose"
                },
                {
                  "color": "#d32126",
                  "name": "Hot Red"
                },
                {
                  "color": "#c94552",
                  "name": "Rosewood"
                },
                {
                  "color": "#9a4b4a",
                  "name": "Rose Wine"
                },
                {
                  "color": "#9a183a",
                  "name": "Scarlet"
                },
                {
                  "color": "#8c1a33",
                  "name": "Ruby"
                },
                {
                  "color": "#f4f3ec",
                  "name": "Snow White"
                },
                {
                  "color": "#c4e2e5",
                  "name": "Baby Blue"
                },
                {
                  "color": "#c4e4e9",
                  "name": "Bluebell"
                },
                {
                  "color": "#61a4ce",
                  "name": "Powder Blue"
                },
                {
                  "color": "#5aa9d2",
                  "name": "Cornflower"
                },
                {
                  "color": "#7a9fbd",
                  "name": "Bluebird"
                },
                {
                  "color": "#52729f",
                  "name": "Capri Blue"
                },
                {
                  "color": "#165d9c",
                  "name": "Electric Blue"
                },
                {
                  "color": "#284b62",
                  "name": "Light Navy"
                },
                {
                  "color": "#1f3159",
                  "name": "Midnight"
                },
                {
                  "color": "#142130",
                  "name": "Ultramarine"
                },
                {
                  "color": "#fbf4b3",
                  "name": "Candle Light"
                },
                {
                  "color": "#dbdc82",
                  "name": "Lime Juice"
                },
                {
                  "color": "#f7f1a5",
                  "name": "Lemon Chiffon"
                },
                {
                  "color": "#efd677",
                  "name": "Lemonade"
                },
                {
                  "color": "#f6de6c",
                  "name": "Primrose"
                },
                {
                  "color": "#f8e234",
                  "name": "Lemon"
                },
                {
                  "color": "#f3ad31",
                  "name": "Yellow Gold"
                },
                {
                  "color": "#cb944f",
                  "name": "Topaz"
                },
                {
                  "color": "#e1951a",
                  "name": "Saffron"
                },
                {
                  "color": "#ee8c34",
                  "name": "Sweet Orange"
                },
                {
                  "color": "#ba651e",
                  "name": "Ginger Gold"
                },
                {
                  "color": "#c9c956",
                  "name": "Lime"
                },
                {
                  "color": "#c8c232",
                  "name": "Green Yellow"
                },
                {
                  "color": "#9bb637",
                  "name": "Kiwi"
                },
                {
                  "color": "#9bb637",
                  "name": "Sage Green"
                },
                {
                  "color": "#8cbf61",
                  "name": "Apple Granny"
                },
                {
                  "color": "#43a653",
                  "name": "Apple Green"
                },
                {
                  "color": "#42a778",
                  "name": "Parrot Green"
                },
                {
                  "color": "#3d8d47",
                  "name": "Emerald"
                },
                {
                  "color": "#77a652",
                  "name": "Forest Green"
                },
                {
                  "color": "#8a7f45",
                  "name": "Willow"
                },
                {
                  "color": "#5b5444",
                  "name": "Dark Olive"
                },
                {
                  "color": "#f3efe2",
                  "name": "Bridal White"
                },
                {
                  "color": "#f7f1d7",
                  "name": "Old Lace"
                },
                {
                  "color": "#b8cbb1",
                  "name": "Silver Green"
                },
                {
                  "color": "#809c8c",
                  "name": "Silver Blue"
                },
                {
                  "color": "#dee1cf",
                  "name": "Light Silver"
                },
                {
                  "color": "#c1c0c3",
                  "name": "Mercury"
                },
                {
                  "color": "#656865",
                  "name": "Metal Grey"
                },
                {
                  "color": "#575956",
                  "name": "Anthracite"
                },
                {
                  "color": "#474e54",
                  "name": "Charcoal"
                },
                {
                  "color": "#121212",
                  "name": "Jet Black"
                },
                {
                  "color": "#f9f73f",
                  "name": "Neon Yellow"
                },
                {
                  "color": "#2dd950",
                  "name": "Neon Green"
                },
                {
                  "color": "#f76c2a",
                  "name": "Neon Orange"
                },
                {
                  "color": "#ea3a7f",
                  "name": "Neon Pink"
                }
              ]
            }
          ],
          "name": "Catona",
          "id": "catona"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "scheepjes.com",
                "url": "https://www.scheepjes.com/en/colour-crafter-328/",
                "accessed": "2022-03-19"
              },
              "colors": [
                {
                  "color": "#f1dbda",
                  "name": "Ommen"
                },
                {
                  "color": "#f3c6d0",
                  "name": "Sittard"
                },
                {
                  "color": "#e2a5c8",
                  "name": "Amersfoort"
                },
                {
                  "color": "#d2668a",
                  "name": "Den Bosch"
                },
                {
                  "color": "#b3818f",
                  "name": "Venlo"
                },
                {
                  "color": "#f76687",
                  "name": "Mechelen"
                },
                {
                  "color": "#f163a3",
                  "name": "Luik"
                },
                {
                  "color": "#f50e84",
                  "name": "Hilversum"
                },
                {
                  "color": "#b0405c",
                  "name": "Kampen"
                },
                {
                  "color": "#4a1218",
                  "name": "Kampen"
                },
                {
                  "color": "#b22c4f",
                  "name": "Tilburg"
                },
                {
                  "color": "#69041f",
                  "name": "Roermond"
                },
                {
                  "color": "#96033e",
                  "name": "Apeldoorn"
                },
                {
                  "color": "#a72b70",
                  "name": "Drachten"
                },
                {
                  "color": "#670f48",
                  "name": "Kortrijk"
                },
                {
                  "color": "#772b51",
                  "name": "Zutphen"
                },
                {
                  "color": "#df5854",
                  "name": "Leek"
                },
                {
                  "color": "#cf0711",
                  "name": "Amsterdam"
                },
                {
                  "color": "#ac3124",
                  "name": "Vlissingen"
                },
                {
                  "color": "#96032c",
                  "name": "Maastricht"
                },
                {
                  "color": "#f2c0ae",
                  "name": "Lelystad"
                },
                {
                  "color": "#9c311a",
                  "name": "Breda"
                },
                {
                  "color": "#e95823",
                  "name": "Gent"
                },
                {
                  "color": "#ac3d24",
                  "name": "Leeuwarden"
                },
                {
                  "color": "#f0ece7",
                  "name": "Weert"
                },
                {
                  "color": "#baa08f",
                  "name": "Ermelo"
                },
                {
                  "color": "#c9945b",
                  "name": "Bergen"
                },
                {
                  "color": "#f95e19",
                  "name": "The Hague"
                },
                {
                  "color": "#fae517",
                  "name": "Leuven"
                },
                {
                  "color": "#f2c739",
                  "name": "Brussel"
                },
                {
                  "color": "#f59808",
                  "name": "Eindhoven"
                },
                {
                  "color": "#9b6421",
                  "name": "Burum"
                },
                {
                  "color": "#dbb477",
                  "name": "Gouda"
                },
                {
                  "color": "#f9db4e",
                  "name": "Leerdam"
                },
                {
                  "color": "#d0a32f",
                  "name": "Coevorden"
                },
                {
                  "color": "#b1972f",
                  "name": "Nijmegen"
                },
                {
                  "color": "#cebca7",
                  "name": "Hasselt"
                },
                {
                  "color": "#866853",
                  "name": "Veenendaal"
                },
                {
                  "color": "#c9945b",
                  "name": "Haarlem"
                },
                {
                  "color": "#271711",
                  "name": "Veendam"
                },
                {
                  "color": "#ccbca3",
                  "name": "Zandvoort"
                },
                {
                  "color": "#ebe6dc",
                  "name": "Barneveld"
                },
                {
                  "color": "#d5cfbe",
                  "name": "Verviers"
                },
                {
                  "color": "#acacac",
                  "name": "Sint Niklaas"
                },
                {
                  "color": "#6b6d6f",
                  "name": "Wolvega"
                },
                {
                  "color": "#404040",
                  "name": "Rotterdam"
                },
                {
                  "color": "#343434",
                  "name": "Pollare"
                },
                {
                  "color": "#0e0f0c",
                  "name": "Ede"
                },
                {
                  "color": "#994393",
                  "name": "Hengelo"
                },
                {
                  "color": "#641f43",
                  "name": "Meppel"
                },
                {
                  "color": "#7a465f",
                  "name": "Hoorn"
                },
                {
                  "color": "#2f1033",
                  "name": "Spa"
                },
                {
                  "color": "#776690",
                  "name": "Amstelveen"
                },
                {
                  "color": "#7c358f",
                  "name": "Brugge"
                },
                {
                  "color": "#291130",
                  "name": "Deventer"
                },
                {
                  "color": "#2c1558",
                  "name": "Antwerpen"
                },
                {
                  "color": "#aba8ad",
                  "name": "Heerenveen"
                },
                {
                  "color": "#bfbaca",
                  "name": "Helmond"
                },
                {
                  "color": "#af9bbf",
                  "name": "Heerlen"
                },
                {
                  "color": "#7c79c0",
                  "name": "Rhenen"
                },
                {
                  "color": "#99b7c9",
                  "name": "Texel"
                },
                {
                  "color": "#4774ac",
                  "name": "Middelburg"
                },
                {
                  "color": "#5e70ba",
                  "name": "Zwolle"
                },
                {
                  "color": "#232249",
                  "name": "Harlingen"
                },
                {
                  "color": "#455e75",
                  "name": "Dokkum"
                },
                {
                  "color": "#0a4890",
                  "name": "Geraardsbergen"
                },
                {
                  "color": "#16205b",
                  "name": "Delft"
                },
                {
                  "color": "#192656",
                  "name": "Oostende"
                },
                {
                  "color": "#1594bf",
                  "name": "Den Helder"
                },
                {
                  "color": "#105061",
                  "name": "Alkmaar"
                },
                {
                  "color": "#083f4d",
                  "name": "Wilnis"
                },
                {
                  "color": "#1a1c25",
                  "name": "Tynaarlo"
                },
                {
                  "color": "#a4cdd1",
                  "name": "Urk"
                },
                {
                  "color": "#45b6a4",
                  "name": "Eelde"
                },
                {
                  "color": "#0a7696",
                  "name": "Knokke"
                },
                {
                  "color": "#0b6679",
                  "name": "Bastogne"
                },
                {
                  "color": "#a1c0ba",
                  "name": "Goes"
                },
                {
                  "color": "#6f9a84",
                  "name": "Ameland"
                },
                {
                  "color": "#386171",
                  "name": "Alphen"
                },
                {
                  "color": "#155053",
                  "name": "Dordrecht"
                },
                {
                  "color": "#116529",
                  "name": "Malmédy"
                },
                {
                  "color": "#1a592b",
                  "name": "Franeker"
                },
                {
                  "color": "#0c5930",
                  "name": "Emmen"
                },
                {
                  "color": "#17321c",
                  "name": "Utrecht"
                },
                {
                  "color": "#b0a03e",
                  "name": "Delfzijl"
                },
                {
                  "color": "#74733d",
                  "name": "Assen"
                },
                {
                  "color": "#506f52",
                  "name": "Enschede"
                },
                {
                  "color": "#444128",
                  "name": "Arnhem"
                },
                {
                  "color": "#dddaac",
                  "name": "Leiden"
                },
                {
                  "color": "#2de554",
                  "name": "Groningen"
                },
                {
                  "color": "#a9de93",
                  "name": "Almelo"
                },
                {
                  "color": "#80ba3f",
                  "name": "Terneuzen"
                },
                {
                  "color": "#6a9937",
                  "name": "Charleroi"
                }
              ]
            }
          ],
          "name": "Colour Crafter",
          "id": "colour_crafter"
        }
      ]
    },
    {
      "name": "Stylecraft",
      "id": "stylecraft",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "stylecraft-yarns.co.uk",
                "url": "https://www.stylecraft-yarns.co.uk/yarns/naturals-organic-cotton",
                "accessed": "2022-03-20"
              },
              "colors": [
                {
                  "color": "#e8e7eb",
                  "name": "Gypsum"
                },
                {
                  "color": "#f089b1",
                  "name": "Fondant"
                },
                {
                  "color": "#e20223",
                  "name": "Poppy"
                },
                {
                  "color": "#96ab4f",
                  "name": "Leaf"
                },
                {
                  "color": "#b1d7d7",
                  "name": "Peppermint"
                },
                {
                  "color": "#e7dccd",
                  "name": "Bone"
                },
                {
                  "color": "#f3d4aa",
                  "name": "Buttermilk"
                },
                {
                  "color": "#dfc175",
                  "name": "Citron"
                },
                {
                  "color": "#f2bfb2",
                  "name": "Peach"
                },
                {
                  "color": "#f5b0b9",
                  "name": "Blush"
                },
                {
                  "color": "#e9727f",
                  "name": "Papaya"
                },
                {
                  "color": "#f0528f",
                  "name": "Flamingo"
                },
                {
                  "color": "#f19185",
                  "name": "Coral"
                },
                {
                  "color": "#f86a4f",
                  "name": "Carrot"
                },
                {
                  "color": "#c7a0a7",
                  "name": "Pink Clay"
                },
                {
                  "color": "#f5ced3",
                  "name": "Blossom"
                },
                {
                  "color": "#cc88b7",
                  "name": "Mauve"
                },
                {
                  "color": "#9f539d",
                  "name": "Amethyst"
                },
                {
                  "color": "#a73265",
                  "name": "Plum"
                },
                {
                  "color": "#cfbaab",
                  "name": "Flax"
                },
                {
                  "color": "#ae7d74",
                  "name": "Wood"
                },
                {
                  "color": "#ab818a",
                  "name": "Rosewood"
                },
                {
                  "color": "#644b4e",
                  "name": "Coffee Bean"
                },
                {
                  "color": "#25b291",
                  "name": "Jade"
                },
                {
                  "color": "#068c97",
                  "name": "Sea Green"
                },
                {
                  "color": "#b6c4af",
                  "name": "Artichoke"
                },
                {
                  "color": "#bbcada",
                  "name": "Cardoon"
                },
                {
                  "color": "#98b3be",
                  "name": "Faded Denim"
                },
                {
                  "color": "#96aa8f",
                  "name": "Sage"
                },
                {
                  "color": "#addae3",
                  "name": "Blue Lagoon"
                },
                {
                  "color": "#467bc0",
                  "name": "Azure"
                },
                {
                  "color": "#06354c",
                  "name": "Deep Blue"
                },
                {
                  "color": "#656790",
                  "name": "Blue Dusk"
                },
                {
                  "color": "#455a85",
                  "name": "Indigo Wash"
                },
                {
                  "color": "#ccd3db",
                  "name": "Moonlight"
                },
                {
                  "color": "#b7b6ba",
                  "name": "Dove"
                },
                {
                  "color": "#726877",
                  "name": "Storm"
                },
                {
                  "color": "#1e1d23",
                  "name": "Iron"
                }
              ]
            }
          ],
          "name": "Naturals Organic Cotton",
          "id": "naturals_organic_cotton"
        },
        {
          "colorways": [
            {
              "source": {
                "name": "stylecraft-yarns.co.uk",
                "url": "https://www.stylecraft-yarns.co.uk/yarns/special-dk",
                "accessed": "2022-03-19"
              },
              "colors": [
                {
                  "color": "#e2e2e3",
                  "name": "White"
                },
                {
                  "color": "#121011",
                  "name": "Black"
                },
                {
                  "color": "#296db5",
                  "name": "Aster"
                },
                {
                  "color": "#301e19",
                  "name": "Dark Brown"
                },
                {
                  "color": "#e9e0cd",
                  "name": "Cream"
                },
                {
                  "color": "#1c3c29",
                  "name": "Bottle"
                },
                {
                  "color": "#d80216",
                  "name": "Matador"
                },
                {
                  "color": "#12121f",
                  "name": "Midnight"
                },
                {
                  "color": "#7da6c7",
                  "name": "Cloud Blue"
                },
                {
                  "color": "#e9d7a2",
                  "name": "Lemon"
                },
                {
                  "color": "#a0274f",
                  "name": "Raspberry"
                },
                {
                  "color": "#f7bcab",
                  "name": "Apricot"
                },
                {
                  "color": "#514928",
                  "name": "Khaki"
                },
                {
                  "color": "#8e2c12",
                  "name": "Copper"
                },
                {
                  "color": "#8ec2cc",
                  "name": "Sherbet"
                },
                {
                  "color": "#3e0b19",
                  "name": "Burgundy"
                },
                {
                  "color": "#462b1e",
                  "name": "Walnut"
                },
                {
                  "color": "#6f1553",
                  "name": "Plum"
                },
                {
                  "color": "#054c56",
                  "name": "Teal"
                },
                {
                  "color": "#494943",
                  "name": "Graphite"
                },
                {
                  "color": "#987159",
                  "name": "Mocha"
                },
                {
                  "color": "#888942",
                  "name": "Meadow"
                },
                {
                  "color": "#79475c",
                  "name": "Grape"
                },
                {
                  "color": "#1091b9",
                  "name": "Turquoise"
                },
                {
                  "color": "#c88990",
                  "name": "Pale Rose"
                },
                {
                  "color": "#faaa4b",
                  "name": "Saffron"
                },
                {
                  "color": "#5d72b6",
                  "name": "Bluebell"
                },
                {
                  "color": "#cb104a",
                  "name": "Pomegranate"
                },
                {
                  "color": "#af3798",
                  "name": "Magenta"
                },
                {
                  "color": "#71706d",
                  "name": "Grey"
                },
                {
                  "color": "#fc9b02",
                  "name": "Sunshine"
                },
                {
                  "color": "#045c2e",
                  "name": "Green"
                },
                {
                  "color": "#04135f",
                  "name": "Royal"
                },
                {
                  "color": "#6f021b",
                  "name": "Claret"
                },
                {
                  "color": "#767a33",
                  "name": "Greengage"
                },
                {
                  "color": "#62737b",
                  "name": "Waterfall"
                },
                {
                  "color": "#715d49",
                  "name": "Sandstone"
                },
                {
                  "color": "#9b456b",
                  "name": "Peony"
                },
                {
                  "color": "#504f4c",
                  "name": "Charcoal"
                },
                {
                  "color": "#482a59",
                  "name": "Viola"
                },
                {
                  "color": "#f6b9c4",
                  "name": "Candyfloss"
                },
                {
                  "color": "#f54f54",
                  "name": "Shrimp"
                },
                {
                  "color": "#8382bd",
                  "name": "Lavender"
                },
                {
                  "color": "#143e4a",
                  "name": "Atlantis"
                },
                {
                  "color": "#a8a8a5",
                  "name": "Silver"
                },
                {
                  "color": "#6c1431",
                  "name": "Carnation"
                },
                {
                  "color": "#c4b6a0",
                  "name": "Parchment"
                },
                {
                  "color": "#eacecf",
                  "name": "Soft Peach"
                },
                {
                  "color": "#ea7196",
                  "name": "Fondant"
                },
                {
                  "color": "#a8021d",
                  "name": "Lipstick"
                },
                {
                  "color": "#fa5438",
                  "name": "Jaffa"
                },
                {
                  "color": "#fa0688",
                  "name": "Fiesta"
                },
                {
                  "color": "#85e799",
                  "name": "Bright Green"
                },
                {
                  "color": "#f9c748",
                  "name": "Citron"
                },
                {
                  "color": "#5b4978",
                  "name": "Violet"
                },
                {
                  "color": "#375678",
                  "name": "Denim"
                },
                {
                  "color": "#b7d8a6",
                  "name": "Spring Green"
                },
                {
                  "color": "#deadd2",
                  "name": "Clematis"
                },
                {
                  "color": "#c29452",
                  "name": "Camel"
                },
                {
                  "color": "#50bfb5",
                  "name": "Aspen"
                },
                {
                  "color": "#25092a",
                  "name": "Emperor"
                },
                {
                  "color": "#9c83b3",
                  "name": "Wisteria"
                },
                {
                  "color": "#cf024b",
                  "name": "Bright Pink"
                },
                {
                  "color": "#074d64",
                  "name": "Petrol"
                },
                {
                  "color": "#ba7409",
                  "name": "Gold"
                },
                {
                  "color": "#d4ae8b",
                  "name": "Stone"
                },
                {
                  "color": "#e85c1b",
                  "name": "Spice"
                },
                {
                  "color": "#a58c26",
                  "name": "Lime"
                },
                {
                  "color": "#4d7884",
                  "name": "Storm Blue"
                },
                {
                  "color": "#c82d23",
                  "name": "Tomato"
                },
                {
                  "color": "#a9a3b1",
                  "name": "Parma Violet"
                },
                {
                  "color": "#649b8c",
                  "name": "Sage"
                },
                {
                  "color": "#bdb7ad",
                  "name": "Warm Grey"
                },
                {
                  "color": "#9d5826",
                  "name": "Gingerbread"
                },
                {
                  "color": "#e9e6e4",
                  "name": "Hint of Silver"
                },
                {
                  "color": "#9fb5af",
                  "name": "Duck Egg"
                },
                {
                  "color": "#6fb443",
                  "name": "Grass Green"
                },
                {
                  "color": "#bdb655",
                  "name": "Pistachio"
                },
                {
                  "color": "#d1a10b",
                  "name": "Mustard"
                },
                {
                  "color": "#627852",
                  "name": "Cypress"
                },
                {
                  "color": "#212867",
                  "name": "Lobelia"
                },
                {
                  "color": "#06783a",
                  "name": "Kelly Green"
                },
                {
                  "color": "#a30955",
                  "name": "Fuchsia Purple"
                },
                {
                  "color": "#7f104f",
                  "name": "Boysenberry"
                },
                {
                  "color": "#044e75",
                  "name": "Empire"
                },
                {
                  "color": "#083874",
                  "name": "Lapis"
                },
                {
                  "color": "#c3aaa5",
                  "name": "Mushroom"
                },
                {
                  "color": "#ec878a",
                  "name": "Blush"
                },
                {
                  "color": "#91a683",
                  "name": "Lincoln"
                },
                {
                  "color": "#e4c584",
                  "name": "Buttermilk"
                },
                {
                  "color": "#db836b",
                  "name": "Vintage Peach"
                },
                {
                  "color": "#277498",
                  "name": "Cornish Blue"
                },
                {
                  "color": "#7eb9af",
                  "name": "Spearmint"
                },
                {
                  "color": "#dfbdc2",
                  "name": "Powder Pink"
                },
                {
                  "color": "#e7c4a1",
                  "name": "Toy"
                },
                {
                  "color": "#8b9805",
                  "name": "Apple"
                },
                {
                  "color": "#fb8538",
                  "name": "Clementine"
                },
                {
                  "color": "#0b1a41",
                  "name": "French Navy"
                },
                {
                  "color": "#55276d",
                  "name": "Proper Purple"
                },
                {
                  "color": "#e6a50c",
                  "name": "Dandelion"
                }
              ]
            }
          ],
          "name": "Special DK",
          "id": "special_dk"
        }
      ]
    },
    {
      "name": "Valley Yarns",
      "id": "valley_yarns",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "yarn.com",
                "url": "https://www.yarn.com/products/valley-yarns-haydenville-dk",
                "accessed": "2023-01-04"
              },
              "colors": [
                {
                  "color": "#e8e8d4",
                  "name": "White"
                },
                {
                  "color": "#f4f1d6",
                  "name": "Natural"
                },
                {
                  "color": "#ded4c4",
                  "name": "Sand"
                },
                {
                  "color": "#ad9786",
                  "name": "Fawn"
                },
                {
                  "color": "#171917",
                  "name": "Black"
                },
                {
                  "color": "#2a2a2b",
                  "name": "Grey"
                },
                {
                  "color": "#979a94",
                  "name": "Light Grey"
                },
                {
                  "color": "#d3d1cd",
                  "name": "Silver"
                },
                {
                  "color": "#1a2439",
                  "name": "Navy"
                },
                {
                  "color": "#890f1b",
                  "name": "Red"
                },
                {
                  "color": "#29454f",
                  "name": "Teal"
                },
                {
                  "color": "#694d66",
                  "name": "Soft Grape"
                },
                {
                  "color": "#739693",
                  "name": "Lake"
                },
                {
                  "color": "#56735c",
                  "name": "Sage"
                },
                {
                  "color": "#dec97b",
                  "name": "Yellow"
                },
                {
                  "color": "#055a72",
                  "name": "Royal"
                },
                {
                  "color": "#84abd7",
                  "name": "Light Blue"
                },
                {
                  "color": "#b496c5",
                  "name": "Lavender"
                },
                {
                  "color": "#f6d1cd",
                  "name": "Light Pink"
                },
                {
                  "color": "#ba4052",
                  "name": "Persimmon"
                },
                {
                  "color": "#6a1b50",
                  "name": "Mulberry"
                },
                {
                  "color": "#8386bf",
                  "name": "Periwinkle"
                },
                {
                  "color": "#4a72ae",
                  "name": "Blue"
                },
                {
                  "color": "#bdd161",
                  "name": "Spring Leaf"
                },
                {
                  "color": "#0597b8",
                  "name": "Turquoise"
                },
                {
                  "color": "#d1a322",
                  "name": "Squash"
                },
                {
                  "color": "#751734",
                  "name": "Burgundy"
                }
              ]
            }
          ],
          "name": "Haydenville DK",
          "id": "haydenville_dk"
        }
      ]
    },
    {
      "name": "We Love Yarn",
      "id": "we_love_yarn",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "hobbii.com",
                "url": "https://hobbii.com/mega-ball-we-love-yarn",
                "accessed": "2023-01-16"
              },
              "colors": [
                {
                  "color": "#f6ede6",
                  "name": "White"
                },
                {
                  "color": "#f6e6c2",
                  "name": "Cream"
                },
                {
                  "color": "#f7d771",
                  "name": "Banana"
                },
                {
                  "color": "#eba11d",
                  "name": "Gold"
                },
                {
                  "color": "#0a6b52",
                  "name": "Deep Emerald"
                },
                {
                  "color": "#13a74f",
                  "name": "Parakeet"
                },
                {
                  "color": "#cbead2",
                  "name": "Soft Mint"
                },
                {
                  "color": "#d4dee8",
                  "name": "Light Blue"
                },
                {
                  "color": "#84bad7",
                  "name": "Baby Blue"
                },
                {
                  "color": "#598bbf",
                  "name": "Cornflower"
                },
                {
                  "color": "#0b3d80",
                  "name": "Cobalt"
                },
                {
                  "color": "#09618d",
                  "name": "Peacock"
                },
                {
                  "color": "#1e2435",
                  "name": "Dark Navy"
                },
                {
                  "color": "#3c154d",
                  "name": "Eggplant"
                },
                {
                  "color": "#eed4e2",
                  "name": "Lilac"
                },
                {
                  "color": "#e993c3",
                  "name": "Pink"
                },
                {
                  "color": "#efc1b8",
                  "name": "Powder Blush"
                },
                {
                  "color": "#bf6e71",
                  "name": "Dusty Rose"
                },
                {
                  "color": "#954b58",
                  "name": "Mauve"
                },
                {
                  "color": "#af064a",
                  "name": "Magenta"
                },
                {
                  "color": "#611349",
                  "name": "Plum"
                },
                {
                  "color": "#970206",
                  "name": "Carmine"
                },
                {
                  "color": "#cc0419",
                  "name": "Scarlet"
                },
                {
                  "color": "#9c9390",
                  "name": "Light Gray"
                },
                {
                  "color": "#615a57",
                  "name": "Gray"
                },
                {
                  "color": "#c4ae9c",
                  "name": "Ash"
                },
                {
                  "color": "#e4bf9f",
                  "name": "Beach"
                },
                {
                  "color": "#80614b",
                  "name": "Walnut"
                },
                {
                  "color": "#fbddc7",
                  "name": "Pastel Apricot"
                },
                {
                  "color": "#f8deda",
                  "name": "Pastel Pink"
                },
                {
                  "color": "#f8c1c4",
                  "name": "Bubblegum"
                },
                {
                  "color": "#ef7194",
                  "name": "Bright Pink"
                },
                {
                  "color": "#bb90bf",
                  "name": "Wisteria"
                },
                {
                  "color": "#a5ded3",
                  "name": "Aqua"
                },
                {
                  "color": "#5dcecf",
                  "name": "Bright Blue"
                },
                {
                  "color": "#0ca588",
                  "name": "Deep Turquoise"
                },
                {
                  "color": "#fac13a",
                  "name": "Sunflower"
                },
                {
                  "color": "#f56b30",
                  "name": "Mandarin"
                },
                {
                  "color": "#130E0E",
                  "name": "Black"
                },
                {
                  "color": "#5F141A",
                  "name": "Wine"
                }
              ]
            }
          ],
          "name": "Mega Ball",
          "id": "mega_ball"
        }
      ]
    },
    {
      "name": "Willow Yarns",
      "id": "willow_yarns",
      "yarns": [
        {
          "colorways": [
            {
              "source": {
                "name": "willowyarns.com",
                "url": "https://www.willowyarns.com/willow-yarns-wash-worsted-yarn/",
                "accessed": "2022-12-10"
              },
              "colors": [
                {
                  "color": "#9b2527",
                  "name": "Red Apple"
                },
                {
                  "color": "#601d29",
                  "name": "Cranberry"
                },
                {
                  "color": "#982e4f",
                  "name": "Cooked Quince"
                },
                {
                  "color": "#ce4f60",
                  "name": "Azalea"
                },
                {
                  "color": "#e4afb3",
                  "name": "Little Flower"
                },
                {
                  "color": "#8e4737",
                  "name": "Fallen Tree"
                },
                {
                  "color": "#dacd8a",
                  "name": "Buttercup"
                },
                {
                  "color": "#d49136",
                  "name": "Gold Mine"
                },
                {
                  "color": "#577011",
                  "name": "Wild Lime"
                },
                {
                  "color": "#4e5033",
                  "name": "Sage"
                },
                {
                  "color": "#323416",
                  "name": "Evergreen"
                },
                {
                  "color": "#2bb5d3",
                  "name": "Turquoise"
                },
                {
                  "color": "#88cfb4",
                  "name": "Clear Water"
                },
                {
                  "color": "#7b96bf",
                  "name": "Little Jay"
                },
                {
                  "color": "#28366a",
                  "name": "Sapphire"
                },
                {
                  "color": "#8c769c",
                  "name": "Lavender"
                },
                {
                  "color": "#534373",
                  "name": "Hyacinth"
                },
                {
                  "color": "#3c2434",
                  "name": "Vineyard"
                },
                {
                  "color": "#578cbf",
                  "name": "Blueberry"
                },
                {
                  "color": "#171716",
                  "name": "Night"
                },
                {
                  "color": "#4c4e4f",
                  "name": "Granite"
                },
                {
                  "color": "#8f908e",
                  "name": "Silver"
                },
                {
                  "color": "#cfcbbf",
                  "name": "Cream"
                },
                {
                  "color": "#d3d2c6",
                  "name": "Snow"
                },
                {
                  "color": "#32231f",
                  "name": "Good Earth"
                },
                {
                  "color": "#bea281",
                  "name": "Polished Wood"
                },
                {
                  "color": "#c79a5d",
                  "name": "Peanut"
                },
                {
                  "color": "#9b3e69",
                  "name": "Petals"
                },
                {
                  "color": "#064e56",
                  "name": "Aruba Blue"
                },
                {
                  "color": "#ca3616",
                  "name": "Orange Peel"
                },
                {
                  "color": "#85ba75",
                  "name": "Minty"
                },
                {
                  "color": "#0c101c",
                  "name": "Catalina Blue"
                },
                {
                  "color": "#368a43",
                  "name": "Mojito"
                },
                {
                  "color": "#e09b17",
                  "name": "Sunshine"
                },
                {
                  "color": "#811c68",
                  "name": "Lurid"
                },
                {
                  "color": "#e35d4f",
                  "name": "Coral Peony"
                },
                {
                  "color": "#a75b71",
                  "name": "Peach Blossom"
                },
                {
                  "color": "#0e6f9e",
                  "name": "Celestial"
                },
                {
                  "color": "#f28834",
                  "name": "Carrot"
                },
                {
                  "color": "#858abc",
                  "name": "Blue Wisteria"
                },
                {
                  "color": "#c5dae6",
                  "name": "Dolphin"
                },
                {
                  "color": "#ccd553",
                  "name": "Key Lime"
                },
                {
                  "color": "#5e524c",
                  "name": "Elm"
                },
                {
                  "color": "#b8b8b4",
                  "name": "Silver Birch"
                },
                {
                  "color": "#444746",
                  "name": "Basalt"
                },
                {
                  "color": "#0f8a79",
                  "name": "Spearmint"
                },
                {
                  "color": "#33558d",
                  "name": "Deep Pond"
                },
                {
                  "color": "#611929",
                  "name": "Garnet"
                },
                {
                  "color": "#c56735",
                  "name": "Pumpkin Pie"
                },
                {
                  "color": "#6b7329",
                  "name": "Avocado"
                },
                {
                  "color": "#844546",
                  "name": "Red Plum"
                },
                {
                  "color": "#439084",
                  "name": "Island Blue"
                },
                {
                  "color": "#d07b37",
                  "name": "Apricot"
                },
                {
                  "color": "#9c7558",
                  "name": "Hazelnut"
                },
                {
                  "color": "#f7c9be",
                  "name": "Blush"
                }
              ]
            }
          ],
          "name": "Wash Worsted",
          "id": "wash_worsted"
        }
      ]
    }
  ]

export { colors };