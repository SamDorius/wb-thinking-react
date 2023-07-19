import './InvoiceTable.css';
import { useState } from 'react';

import EditableRowModeButtons from './EditableRowModeButtons';
import EditableDescriptionCell from './EditableDescriptionCell';
import EditableRateCell from './EditableRateCell';
import EditableHoursCell from './EditableHoursCell';

import formatCurrency from '../utils/formatCurrency';

const InvoiceTableRow = ({initialInvoiceData, initialIsEditing, onDeleteClick}) => 
{

    const [isEditing, setIsEditing] = useState(initialIsEditing)

    const [description, setDescription] = useState(initialInvoiceData.description)
    const [rate, setRate] = useState(initialInvoiceData.rate)
    const [hours, setHours] = useState(initialInvoiceData.hours)

    const setEditMode = () => setIsEditing(true)
    const setNormalMode = () => setIsEditing(false)

    // const {description, rate, hours} = initialInvoiceData

    return (
        <tr>
            <EditableRowModeButtons isEditing={isEditing} onEditClick={setEditMode} onSaveClick={setNormalMode} deleteClick={onDeleteClick}/>
            <EditableDescriptionCell value={description} isEditing={isEditing} onValueChange={setDescription} />
            <EditableRateCell isEditing={isEditing} value={rate} onValueChange={setRate}/>
            <EditableHoursCell isEditing={isEditing} value={hours} onValueChange={setHours} />
            <td>{formatCurrency(rate * hours)}</td>
        </tr>
    )
}

export default InvoiceTableRow
