const sites = [
    {
        name: "Baghdad High Court",
        lat: 33.3152,
        lng: 44.3661,
        machines: 1,
        serials: ["ASTXA180XDX432"],
        waze: "https://waze.com/ul?ll=33.3152,44.3661&navigate=yes",
        contact: "Eng. Rabea Younis - +9647701660657",
        warranty: true
    },
    {
        name: "Ibrahim Al-Khalil Border",
        lat: 37.1333,
        lng: 42.5667,
        machines: 2,
        serials: ["ASTXA180XDX430","ASTXA180XDX432"],
        waze: "https://waze.com/ul?ll=37.1333,42.5667&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: true
    },
{
        name: "Peshabour Border",
        lat: 37.0676653086859,
        lng: 42.37785256656626,
        machines: 3,
        serials: ["ASTXA180XDX420","ASTXA180XDX421","ASTXA180XDX422"],
        waze: "https://waze.com/ul?ll=37.0676653086859,42.37785256656626&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
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
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=32.503841521954044, 45.82183061481538&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: false
    }
    ,
    {
        name: "AsiaCell Nasriyah",
        lat:31.041771556483976, lng:46.25566177515773,
        machines: 1,
        serials: ["ASTXA180XDX420"],
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
        lat:35.45687608232148, lng:44.381963410958726,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=35.45687608232148, 44.381963410958726&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: false
    },
    {
        name: "AsiaCell Tikrit",
        lat:34.58651852595826, lng:43.68038231276244,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=34.58651852595826, 43.68038231276244&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty:false
    }
    ,
    {
        name: "AsiaCell Ramadi",
        lat:33.423416756176245, lng:43.30214376119876,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=33.423416756176245, 43.30214376119876&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: false
    },
    {
        name: "AsiaCell Diyala",
        lat:33.751539896533444, lng:44.644543158012574,
        machines: 1,
        serials: ["ASTXA180XDX420"],
        waze: "https://waze.com/ul?ll=33.751539896533444, 44.644543158012574&navigate=yes",
        contact: "Eng. Rafi Ahmed - +9647838009330",
        warranty: false
    },
    {
        name: "AsiaCell Karbala",
        lat:32.60128945332053, lng:44.022535365542616,
        machines: 1,
        serials: ["ASTXA180XDX420"],
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
    }
];
