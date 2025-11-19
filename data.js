const sites = [
    {
        name: "Ibrahim Al-Khalil Border",
        lat: 37.1333,
        lng: 42.5667,
        machines: 2,
        serials: ["ASTXA180XDX430","ASTXA180XDX432"],
        waze: "https://waze.com/ul?ll=37.1333,42.5667&navigate=yes",
        contact: "Hehat - +9647504508695 / sherzar - 07504405235",
        warranty: true
    },
{
        name: "Peshabour Border",
        lat: 37.0676653086859,
        lng: 42.37785256656626,
        machines: 3,
        serials: ["ASTXA180XDX420","ASTXA180XDX421","ASTXA180XDX422"],
        waze: "https://waze.com/ul?ll=37.0676653086859,42.37785256656626&navigate=yes",
        contact: "Chiat - +9647504207226",
        warranty: false
    }
    ,
    {
        name: "AsiaCell Zaxo",
        lat:37.14569480400196, lng:42.68942516502287,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=37.14572045994653, 42.68954318221505&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: false
    },
    {
        name: "AsiaCell kut",
        lat:32.503841521954044, lng:45.82183061481538,
        machines: 1,
        serials: ["ASTVC160SMN165"],
        waze: "https://waze.com/ul?ll=32.503841521954044, 45.82183061481538&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: false
    }
    ,
    {
        name: "AsiaCell Nasriyah",
        lat:31.041771556483976, lng:46.25566177515773,
        machines: 1,
        serials: ["ASTVC160SMN163"],
        waze: "https://waze.com/ul?ll=31.041771556483976, 46.25566177515773&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: false
    },
    {
        name: "AsiaCell Erbil",
        lat:36.181880607818016, lng:43.993507668669096,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=36.181880607818016, 43.993507668669096&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: false
    },
    {
        name: "AsiaCell kirkuk",
        lat:35.523113,lng:44.382908,
        machines: 1,
        serials: ["ASTUA090XS2460"],
        waze: "https://waze.com/ul?ll=35.523113,44.382908&navigate=yes",
        contact: "Mohammed - +9647701105571",
        warranty: false
    },
    {
        name: "AsiaCell Tikrit",
        lat:34.58651852595826, lng:43.68038231276244,
        machines: 1,
        serials: ["ASTUA090XS2461"],
        waze: "https://waze.com/ul?ll=34.58651852595826, 43.68038231276244&navigate=yes",
        contact: "tikrit - +9647701106602",
        warranty:false
    }
    ,
    {
        name: "AsiaCell Ramadi",
        lat:33.423416756176245, lng:43.30214376119876,
        machines: 1,
        serials: ["ASTVD160SMN172"],
        waze: "https://waze.com/ul?ll=33.423416756176245, 43.30214376119876&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: false
    },
    {
        name: "AsiaCell Diyala",
        lat:33.751539896533444, lng:44.644543158012574,
        machines: 1,
        serials: ["ASTVD160SMN175"],
        waze: "https://waze.com/ul?ll=33.751539896533444, 44.644543158012574&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: false
    },
    {
        name: "AsiaCell Karbala",
        lat:32.60128945332053, lng:44.022535365542616,
        machines: 1,
        serials: ["ASTVD160SMN171"],
        waze: "https://waze.com/ul?ll=32.60128945332053, 44.022535365542616&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: false
    }
    ,
    {
        name: "Iraqi Parliament",
        lat:33.313699056106316, lng:44.391070537833606,
        machines: 2,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=33.313699056106316, 44.391070537833606&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: true
    },
    {
        name: "Iraqi Post",
        lat:33.32756276444382, lng:44.38625045239506,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=33.32756276444382, 44.38625045239506&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: true
    },
    {
        name: "Al-mansour Hotel",
        lat:33.32800021020028, lng:44.3959936341351,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=33.32800021020028, 44.3959936341351&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: false
    },{
        name: "Baghdad Hotel",
        lat:33.318671049351494, lng:44.4152536703686,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=33.318671049351494, 44.4152536703686&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: false
    },
    {
        name: "Askary shrine",
        lat:34.19909429998011, lng:43.87366134157801,
        machines: 10,
        serials: ["ASTXA180XDX420","ASTXA180XDX420","ASTXA180XDX420","ASTXA180XDX420","ASTXA180XDX420","ASTXA180XDX420","ASTXA180XDX420","ASTXA180XDX420","ASTXA180XDX420","ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=34.19909429998011, 43.87366134157801&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: true
    },
    {
        name: "Asiacell karrada",
        lat:33.29800759788672, lng:44.44149868465713,
        machines: 10,
        serials: ["ASTVA090XS2459"],
        waze: "https://waze.com/ul?ll=33.29800759788672, 44.44149868465713&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: false
    },
    {
        name: "Asiacell urdon St.",
        lat:33.30500734162424, lng:44.34017155502525,
        machines: 1,
        serials: ["ASTVA090XS2462"],
        waze: "https://waze.com/ul?ll=33.30500734162424, 44.34017155502525&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: false
    },
    {
        name: "محكمة استئناف الرصافة",
        lat:33.332607854353036, lng:44.42272421084841,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=33.332607854353036, 44.42272421084841&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: true
    }
,
    {
        name: "محكمة استئناف الكرخ",
        lat:33.345461613402335, lng:44.32879092681533,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=33.345461613402335, 44.32879092681533&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: true
    }
    ,
    {
        name: "محكمة استئناف بابل",
        lat:32.52905122566041, lng:44.43797686028753,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=32.52905122566041, 44.43797686028753&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: true
    },
    {
        name: "محكمة استئناف النجف",
        lat:32.00639923899986, lng:44.34306598009747,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=32.00639923899986, 44.34306598009747&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: true
    }
    ,
    {
        name: "محكمة استئناف البصرة",
        lat:30.532351734021326,lng:47.76969650886286,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=30.532351734021326, 47.76969650886286&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: true
    }
    ,
    {
        name: "محكمة استئناف ميسان",
        lat:31.84551430432145, lng:47.14301956474706,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=31.84551430432145, 47.14301956474706&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: true
    }
    ,
    {
        name: "محكمة استئناف الناصرية",
        lat:31.075080692839293, lng:46.24906512423084,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=31.075080692839293, 46.24906512423084&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: true
    }
    ,
    {
        name: "محكمة استئناف كربلاء",
        lat:32.56836753276412, lng:44.05072905313892,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=32.56836753276412, 44.05072905313892&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: true
    }
    ,
    {
        name: "محكمة استئناف ميسان",
        lat:31.845468734984074, lng:47.14303029358271,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=31.845468734984074, 47.14303029358271&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: true
    },
    {
        name: "محكمة استئناف الموصل",
        lat:36.33637265026683, lng:43.14222646875899,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=36.33637265026683, 43.14222646875899&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: true
    },
    {
        name:"gulan mall",
        lat:36.2122995,lng:43.9915055,
        machines:4,
        serials:["ast","ast","ast","ast"],
        waze: "https://waze.com/ul?ll=36.2122995,43.9915055&navigate=yes",
        warranty:false
    }
    
];
