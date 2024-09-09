const INTDataobj = [
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Comments': 'Lorem ipsum dolor sit amet consectetur.',
        'InspectionScore': 640,
        'Occupancy': '5 PPL',
        'NextInspectionDate':'12/05/2024'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Comments': 'Lorem ipsum dolor sit amet consectetur.',
        'InspectionScore': 640,
        'Occupancy': '5 PPL',
        'NextInspectionDate':'12/05/2024'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Comments': 'Lorem ipsum dolor sit amet consectetur.',
        'InspectionScore': 640,
        'Occupancy': '5 PPL',
        'NextInspectionDate':'12/05/2024'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Comments': 'Lorem ipsum dolor sit amet consectetur.',
        'InspectionScore': 640,
        'Occupancy': '5 PPL',
        'NextInspectionDate':'12/05/2024'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Comments': 'Lorem ipsum dolor sit amet consectetur.',
        'InspectionScore': 640,
        'Occupancy': '5 PPL',
        'NextInspectionDate':'12/05/2024'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Comments': 'Lorem ipsum dolor sit amet consectetur.',
        'InspectionScore': 640,
        'Occupancy': '5 PPL',
        'NextInspectionDate':'12/05/2024'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Comments': 'Lorem ipsum dolor sit amet consectetur.',
        'InspectionScore': 640,
        'Occupancy': '5 PPL',
        'NextInspectionDate':'12/05/2024'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Comments': 'Lorem ipsum dolor sit amet consectetur.',
        'InspectionScore': 640,
        'Occupancy': '5 PPL',
        'NextInspectionDate':'12/05/2024'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Comments': 'Lorem ipsum dolor sit amet consectetur.',
        'InspectionScore': 640,
        'Occupancy': '5 PPL',
        'NextInspectionDate':'12/05/2024'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Comments': 'Lorem ipsum dolor sit amet consectetur.',
        'InspectionScore': 640,
        'Occupancy': '5 PPL',
        'NextInspectionDate':'12/05/2024'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Comments': 'Lorem ipsum dolor sit amet consectetur.',
        'InspectionScore': 640,
        'Occupancy': '5 PPL',
        'NextInspectionDate':'12/05/2024'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Comments': 'Lorem ipsum dolor sit amet consectetur.',
        'InspectionScore': 640,
        'Occupancy': '5 PPL',
        'NextInspectionDate':'12/05/2024'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Comments': 'Lorem ipsum dolor sit amet consectetur.',
        'InspectionScore': 640,
        'Occupancy': '5 PPL',
        'NextInspectionDate':'12/05/2024'
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'FloorPlan':'2Bed',
        'Comments': 'Lorem ipsum dolor sit amet consectetur.',
        'InspectionScore': 640,
        'Occupancy': '5 PPL',
        'NextInspectionDate':'12/05/2024'
    },
    

]
export const InspectionTAData = (start,range)=>{
    if(range<=0){
        return INTDataobj.slice(0,10);
    }
    else if(range>INTDataobj.length){
        return INTDataobj.slice(start,INTDataobj.length);
    }
    else{
        console.log(INTDataobj.slice(start, range));
        return INTDataobj.slice(start, range);
    }
    
}
export const ITAsizeOfData = ()=>{
    return INTDataobj.length;
}
export const INTsearchingData= (searchState)=>{
    const filteredData = INTDataobj.filter((row) =>{
        return (row.PropertiesAdderess.toLowerCase().includes(searchState.toString().toLowerCase())||
                row.FloorPlan.toLowerCase().includes(searchState.toString().toLowerCase())||
                row.Comments?.toLowerCase().includes(searchState.toString().toLowerCase())||
                row.InspectionScore.toString().toLowerCase().includes(searchState.toString().toLowerCase())||
                row.Occupancy.toLowerCase().includes(searchState.toString().toLowerCase())||
                row.NextInspectionDate.toLowerCase().includes(searchState.toString().toLowerCase())
            )
    });
    return filteredData;
}