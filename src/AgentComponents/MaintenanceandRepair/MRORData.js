const MRORdataobj = [
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Description': 'Lorem ipsum dolor sit amet consectetur.',
        'RepairStatus': 'Building Report',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Description': 'Lorem ipsum dolor sit amet consectetur.',
        'RepairStatus': 'Building Report',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Description': 'Lorem ipsum dolor sit amet consectetur.',
        'RepairStatus': 'Building Report',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Description': 'Lorem ipsum dolor sit amet consectetur.',
        'RepairStatus': 'Building Report',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Description': 'Lorem ipsum dolor sit amet consectetur.',
        'RepairStatus': 'Building Report',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Description': 'Lorem ipsum dolor sit amet consectetur.',
        'RepairStatus': 'Building Report',
    },
]
export const MRORdata = (start,range)=>{
    if(range<=0){
        return MRORdataobj.slice(0,10);
    }
    else if(range>MRORdataobj.length){
        return MRORdataobj.slice(start,MRORdataobj.length);
    }
    else{
        // console.log(dataobj.slice(start, range));
        return MRORdataobj.slice(start, range);
    }
    
}
export const MRORsizeOfData = ()=>{
    return MRORdataobj.length;
}
export const MRORsearchingData= (searchState)=>{
    const filteredData = MRORdataobj.filter((row) =>{
        return (row.PropertiesAdderess?.toLowerCase().includes(searchState.toString().toLowerCase())||
                row.FloorPlan?.toLowerCase().includes(searchState.toString().toLowerCase())||
                row.Description?.toLowerCase().includes(searchState.toString().toLowerCase())||
                row.RepairStatus?.toString().toLowerCase().includes(searchState.toString().toLowerCase())
            )
    });
    return filteredData;
}