
/** update obj interface */
interface IUpdateObj {
    type: string,
    action: string,
    data: any
}

export function CommonAction(updateObj: IUpdateObj) {
    return {
        type: updateObj.type,
        index: updateObj.action,
        data: updateObj.data
    };
}

// props.authActions({
//     action: 'LoginDetails',
//     data: {
//         loginStatus: true
//     },
//     type: 'UPDATE_LOGIN_STATUS'
// })