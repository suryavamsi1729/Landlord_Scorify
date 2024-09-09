const RMdataobj = [
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Notes': 'Lorem ipsum dolor sit amet consectetur.',
        'PropScore': 641,
        'Occupancy': '5 PPL'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Notes': 'Lorem ipsum dolor sit amet consectetur.',
        'PropScore': 640,
        'Occupancy': '5 PPL'
    },
    {
        'PropertiesAdderess':'Surya',
        'FloorPlan':'2Bed',
        'Notes': 'Lorem ipsum dolor sit amet consectetur.',
        'PropScore': 750,
        'Occupancy': '20 PPL'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Notes': 'Lorem ipsum dolor sit amet consectetur.',
        'PropScore': 640,
        'Occupancy': '5 PPL'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Notes': 'Lorem ipsum dolor sit amet consectetur.',
        'PropScore': 640,
        'Occupancy': '5 PPL'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Notes': 'Lorem ipsum dolor sit amet consectetur.',
        'PropScore': 640,
        'Occupancy': '5 PPL'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Notes': 'Lorem ipsum dolor sit amet consectetur.',
        'PropScore': 640,
        'Occupancy': '5 PPL'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Notes': 'Lorem ipsum dolor sit amet consectetur.',
        'PropScore': 640,
        'Occupancy': '5 PPL'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Notes': 'Lorem ipsum dolor sit amet consectetur.',
        'PropScore': 640,
        'Occupancy': '5 PPL'
    },

]
export const MRdata = (start,range)=>{
    if(range<=0){
        return RMdataobj.slice(0,10);
    }
    else if(range>RMdataobj.length){
        return RMdataobj.slice(start,RMdataobj.length);
    }
    else{
        console.log(RMdataobj.slice(start, range));
        return RMdataobj.slice(start, range);
    }
    
}
export const MRsizeOfData = ()=>{
    return RMdataobj.length;
}
export const MRsearchingData = (searchState)=>{
    const filteredData = RMdataobj.filter((row) =>{
        return (row.PropertiesAdderess?.toLowerCase().includes(searchState.toString().toLowerCase())||
                row.FloorPlan?.toLowerCase().includes(searchState.toString().toLowerCase())||
                row.Notes?.toLowerCase().includes(searchState.toString().toLowerCase())||
                row.PropScore?.toString().toLowerCase().includes(searchState.toString().toLowerCase())||
                row.Occupancy?.toLowerCase().includes(searchState.toString().toLowerCase())
            )
    });
    return filteredData;
}