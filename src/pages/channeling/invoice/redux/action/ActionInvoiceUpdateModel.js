import {UPDATE_INVOICE_MODEL_CLOSE, UPDATE_INVOICE_MODEL_SHOW,GET_INVOICE_UPDATE_TABLE_DATA} from "../type/TypeInvoiceUpdateModel";

export const updateInvoiceModeClose = () => dispatch =>{
    dispatch({
        type: UPDATE_INVOICE_MODEL_CLOSE
    })
    }


export const updateInvoiceModeShow = () => dispatch =>{
    dispatch({
        type: UPDATE_INVOICE_MODEL_SHOW
    })
    }
export const getInvoiceTableData = (records) => dispatch =>{
    dispatch({
        type: GET_INVOICE_UPDATE_TABLE_DATA,
        payload:{records}
    })
    }
    
