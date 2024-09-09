const dataobj = [
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'photo':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'photo':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'photo':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'photo':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Open',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
    },
    {
        'RepairDetails': 'Repair Details Text',
        'CompletionDate':'12/05/2024',
        'Status': 'Completed',
        'CompletionReport': 'Lorem ipsum dolor sit amet consectetur. Et a sed.',
        'RepairCost':'https://s3-alpha-sig.figma.com/img/7722/66a9/10fb9a795485531404f6ed89cc67e9d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1mTNE~hIaE6heXXOn8PaC0BFcYli2XR1KJU4ZJqgoI1uNkOev6Toj4yv07wXjtChIH5uB46WNDgECjCs3zUwpbFeRBITwH9NTeTI~ss-jWWTctitm2R0wDUOLL8ui8cFM6L6-Toxoq1hzq7EqrtN29nuBW~E9F2r8CsQHkL7I1KCPUI1tu~LbwBgpkPj6D1xqw6iK5ZQhiYqjkUCrInwd~ku9WP4TK25UjEYSEhRFddjpNajvIRMuOLT8nO~hHg-1CCWjXf5h84Aw4EBzvTg6QTB3ZJQJwQz0EJwZ-Md9iU-F9F1PJL9XDIOtfJFTAfl8if6xK83-DRr6IZKOxgYQ__'
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