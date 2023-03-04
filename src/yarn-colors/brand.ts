interface Brand {
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

export type { Brand }; 