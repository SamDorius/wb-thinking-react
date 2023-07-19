import './InvoiceTable.css';

import EditableRowModeButtons from './EditableRowModeButtons';
import EditableDescriptionCell from './EditableDescriptionCell';
import EditableRateCell from './EditableRateCell';
import EditableHoursCell from './EditableHoursCell';

import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableAddButton from './InvoiceTableAddButton';
import InvoiceTableRow from './InvoiceTableRow';

import { useState } from 'react';

let myId = 4


const InvoiceTable = ({initialInvoiceData}) => 
{

    const [invoiceList, setInvoiceList] = useState(initialInvoiceData)

    const addInvoiceRow = () => 
    {
        const newInvoiceList = [...invoiceList]

        const newInvoiceRow = 
        {
            id: myId,
            description: 'Description',
            rate: '',
            hours: '',
            isEditing: true
        }

        newInvoiceList.push(newInvoiceRow)

        setInvoiceList(newInvoiceList)

        myId += 1
    }

    const deleteInvoiceRow = (id) => 
    {
        const newInvoiceList = [...invoiceList]

        const index = newInvoiceList.findIndex((invoice) => invoice.id === id)

        newInvoiceList.splice(index, 1)

        setInvoiceList(newInvoiceList)
    }

    const rows = invoiceList.map((invoiceItem) => 
    {
        const {id, description, rate, hours, isEditing} = invoiceItem

        return (
            <InvoiceTableRow
                key={id}
                initialInvoiceData={{description, rate, hours}}
                initialIsEditing={isEditing}
                onDeleteClick={() => deleteInvoiceRow(id)}
            />
        )
    })


    return (
        <table>
            <thead>
                <InvoiceTableHeader/>
            </thead>

            <tbody>

                {rows}

                {/* <InvoiceTableRow
                    initialIsEditing={false}
                    initalInvoiceData={{
                        description: 'Janitor',
                        rate: 45,
                        hours: 1
                    }}  
                />

                <InvoiceTableRow
                    initialIsEditing={true}
                    initalInvoiceData={{
                        description: 'Janitor',
                        rate: 200,
                        hours: 1000
                    }}  
                /> */}

                {/* <tr>
                    <EditableRowModeButtons isEditing={false}/>
                    <EditableDescriptionCell value='Web Development' isEditing={false} />
                    <EditableRateCell isEditing={false} value={25} />
                    <EditableHoursCell isEditing={false} value={10} />
                </tr>
                <tr>
                    <EditableRowModeButtons isEditing={true}/>
                    <EditableDescriptionCell value='Copywriting' isEditing={true} />
                    <EditableRateCell isEditing={true} value={20} />
                    <EditableHoursCell isEditing={true} value={8} />
                </tr> */}
            </tbody>

            <tfoot>
                <InvoiceTableAddButton onAddClick={addInvoiceRow}/>
            </tfoot>
        </table>
    )
}

export default InvoiceTable