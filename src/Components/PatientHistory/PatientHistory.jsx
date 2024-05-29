import './PatientHistory.css'
const PatientHistory = ({name, time, appointmentDate, status})=>{
    return(
        <div className='patienthistory'>
            <span>{name}</span>
            <span className='appointmenttime'>{time}</span>
            <span >{appointmentDate}</span>
            <span className='appointmentstatus'>{status}</span>
        </div>
    )
}

export default PatientHistory