let HOSTNAME = window.location.origin;

HOSTNAME = "http://localhost:5000"
// HOSTNAME = "https://learnlytica.assessments.live"

export const API_PATH = HOSTNAME;
let API = HOSTNAME + "/api/";

const GLOBELCONSTANT = {
    AUTH: {
        REGISTER: API + "user",
        LOGIN: API + "user/login",
        LOGOUT: API + "user/logout",
    },

    Services: {
        category: [
            {
                categoryname: "Craftsman",
                subecategory: ["Walls",
                    "Painter",
                    "Machine contractor",
                    "Tiler",
                    "Plumber",
                    "Electrician",
                    "Plumber",
                    "  Landscape gardener",
                    "Carpenter",
                    "Roofing"
                ]

            },

            {
                categoryname: "Services",
                subecategory: ["Tariff",
                    "Mechanical workshop",
                    "Electrician services",
                    " Car and car workshop",
                    " Installation and assembly",
                    "Cleaning",
                    "Moving laundry",
                    "Rental",
                    " Sun protection",
                    "Solar panel",
                    " Pest control",
                    "Transportation",
                    " Alarm and security",
                    "Electric car charger",
                    "Heat pump",
                    "  Moving agency",
                    " Waste management",
                    "Locksmith"
                ]

            },

            {
                categoryname: "Build New",
                subecategory: ["Project Manager",
                    "        Build superstructure",
                    " Building application",
                    "Contractor",
                    "Architect",
                    " Build a cabin",
                    " Build a new detached house",
                    " Build extension",
                    "Build a garage",
                ]

            },
            {
                categoryname: "House and Garden",
                subecategory: ["Groundwork",
                    "Clothing",
                    " Winter garden",
                    "Paving stone",
                    "Roof",
                    "Insulation",
                    " Platting and terrace",
                    "Demolition",
                    "Masonry and concrete",
                    "Painting housing",
                    " Facade washing",
                    "Facade",
                    " Water and wastewater",
                    "Window and door",
                    "Gardening",
                    "Asphalting",
                    "Pergola",
                    " Tree felling",
                    "Fence and gate",
                    "Landscape architect",
                    "Pipe and chimney",
                    "Wood stove"
                ]

            },
            {
                categoryname: "Interior Renovation",
                subecategory: ["Lay floor",
                    "Refurbish the kitchen",
                    " Refurbish the attic",
                    "Tiling",
                    " Refurbish the laundry room",
                    " Wet room covering",
                    "Renovate apartment",
                    "Dormitory/rental unit",
                    " Floor studding",
                    "Refurbish the living room",
                    "Staircase",
                    " Interior architect",
                    " Renovate the bathroom",
                    "Refurbish the basement",
                    "Membrane",
                    "Heat and energy",
                    "Painting/wallpapering",
                    "Fireplace/Fireplace",
                    " Microcement"
                ]

            },

        ]
    }


}
export default GLOBELCONSTANT;