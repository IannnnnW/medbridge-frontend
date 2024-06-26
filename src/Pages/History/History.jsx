import { useEffect } from 'react';
import DropDown from '../../Components/DropDownMenu/DropDown'
import PatientHistory from '../../Components/PatientHistory/PatientHistory';
import { useState } from 'react';
import { Appointments } from '../../Services/api';
import { useContext } from 'react';
import { AuthContext } from '../../Services/authprovider';
import { FaRegCalendarTimes } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import './History.css'

const History = ()=>{
    const { authUser } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)
    const [appointments, setAppointments] = useState([])
    const [appointments_2, setAppointments_2] = useState([])
    const [targetValue, setTargetValue] = useState("")

    useEffect(()=>{
       return  setAppointments_2(appointments.filter(app => app.patient.name.toLowerCase().includes(targetValue.toLowerCase()) || app.date.toLowerCase().includes(targetValue.toLowerCase())))
    
    }, [targetValue])

    useEffect(()=>{
        const getDoctorHistory = async ()=>{
            try{
                setIsLoading(true)
                const pastAppointments = await Appointments.getDoctorHistory({doctorID: authUser.doc_ID})
                setAppointments(pastAppointments.data)
                setIsLoading(false)
            } catch (error){
                console.log(error)
            }
        }
        getDoctorHistory()
    }, [])
    
    return(
        <div className="historymain">
            <h1 className='heading'>History</h1>
            <div className='searchbar'>
                <div className='searchdiv'>
                    <i className="bi bi-search"></i>
                    <input className='search' placeholder='Search by Patient, Date' onChange={(e) =>setTargetValue(e.target.value)} />
                </div>
                <div className='card p-1'>
                    {appointments_2.length} records
                </div>
            </div>
            <div className='resultsbar'>
                <span>#Patient Name</span>
                <span>Time</span>
                <span>Appointment Date</span>
                <span>Status</span>
            </div>
            {isLoading ? <Skeleton count={4}/> : targetValue.length === 0 ? appointments.length ? appointments.map((app) => <PatientHistory key={app.selected_apt_ID} name={app.patient.name} time={app.time} appointmentDate={app.date} status={app.status}/>) : <h5 className='noactivity'>No Records <FaRegCalendarTimes /></h5> : appointments_2.length ? appointments_2.map((app) => <PatientHistory key={app.selected_apt_ID} name={app.patient.name} time={app.time} appointmentDate={app.date} status={app.status}/>) : <h5 className='noactivity'>No Records <FaRegCalendarTimes /></h5>}
        </div>
    )
}
export default History