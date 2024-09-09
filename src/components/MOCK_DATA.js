const dataobj = [
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'$ 200.00'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'$ 200.00'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'$ 200.00'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'$ 200.00'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'$ 200.00'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'$ 200.00'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'$ 200.00'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'$ 200.00'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'$ 200.00'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'$ 200.00'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'$ 200.00'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'$ 200.00'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'$ 200.00'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'$ 200.00'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'$ 200.00'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'$ 200.00'
    },
]
export const data = (start,range)=>{
    if(range<=0){
        return dataobj.slice(0,10);
    }
    else if(range>dataobj.length){
        return dataobj.slice(start,dataobj.length);
    }
    else{
        return dataobj.slice(start, range);
    }
    
}
export const sizeOfData = ()=>{
    return dataobj.length;
}