import {UPDATE_INVOICE_MODEL_CLOSE, UPDATE_INVOICE_MODEL_SHOW,GET_INVOICE_UPDATE_TABLE_DATA} from "../type/TypeInvoiceUpdateModel";

const initialState ={
    invoiceUpdateModelVisibile:false,
    invoiceTableRecords:[]
} 

export default function(state=initialState,action){
    switch (action.type){
        case UPDATE_INVOICE_MODEL_CLOSE:
            return{
                ...state,
                invoiceUpdateModelVisibile:false
            }
            case UPDATE_INVOICE_MODEL_SHOW:
            return{
                ...state,
                invoiceUpdateModelVisibile:true
            };
            case GET_INVOICE_UPDATE_TABLE_DATA:
            return{
                ...state,
                invoiceTableRecords:action.payload.records
            };
            default:
                return state;
    }
}
