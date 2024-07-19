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
    JOB: {
        CREATE_JOB: API + "jobs/postjob",
        VIEW_ALL_JOBS: API + "jobs/viewalljobs",
        VIEW_JOB_BY_ID: API + "jobs/viewjob/:jobId",
        APPLY_JOB: API + "jobs/apply/:jobId",
        COMPLETE_JOB: API + "jobs/complete/:jobId",
        DELETE_JOB: API + "jobs/deletejob/:jobId",
        EDIT_JOB: API + "jobs/editjob/:jobId",
        GET_JOB_APPLICATIONS_BY_ID: API + "jobs/applications/:jobId",
        JOB_POSTED_BY_USERS: API +  "jobs/user/jobs/posted",
        JOB_SELECTED: API +  "jobs/user/jobs/selected",
        GET_COMPANIES_BY_CATEGORY: API + "jobs/getcompaniesbycategory/:category",
        GET_JOBS_BY_CATEGORY: API + "jobs/getjobsbycategory/:category",
        GET_COMPANIES_BY_SUBCATEGORY: API + "jobs/getcompaniesbysubCategory/:subcategory",
        GET_JOBS_BY_SUBCATEGORY: API + "jobs/getjobsbysubcategory/:subcategory"
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