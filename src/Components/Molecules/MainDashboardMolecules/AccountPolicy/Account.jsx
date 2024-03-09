import React, { useEffect, useState} from 'react';
import { Form } from 'react-bootstrap';
import CustomButton from '../../../Atoms/CustomButton';
import CustomTitle from '../../../Atoms/CustomTitle';
import './Account.css';
import {
    FaBuilding,
    FaIndustry,
    FaMapMarkerAlt,
    FaDollarSign,
    FaPercent,
    FaUserTie,
    FaCog,
    FaUsers,
    FaTools,
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { selectCompany, getCompany } from '../../../../States/CompanyState';
import EditableField from './EditableField';

const Account = () => {
    const dispatch = useDispatch();
    const company = useSelector(selectCompany);

    useEffect(() => {
        dispatch(getCompany());
    }, []);

   

    return (
        <div className="mt-3 container">
            <Form className='w-50 m-auto form-account'>
                <CustomTitle text="Company Information" />
                <div className="container-information">
                    <EditableField
                        label="Company Name"
                        fieldName="companyName"
                        icon={<FaBuilding className="info-icon" />}
                        value={company[0]?.companyName || ''}
                        companyId={company[0]?._id}
                    />
                    <EditableField
                        label="Industry"
                        fieldName="industry"
                        icon={<FaIndustry className="info-icon" />}
                        value={company[0]?.industry || ''}
                        companyId={company[0]?._id}
                    />
                    <EditableField
                        label="Location"
                        fieldName="location"
                        icon={<FaMapMarkerAlt className="info-icon" />}
                        value={company[0]?.location || ''}
                        companyId={company[0]?._id}
                    />
                </div>
                <CustomTitle text="Company Details" />
                <div className="container-information">
                    <EditableField
                        label="Annual Revenue"
                        fieldName="specificCompanyInfo.annualRevenue"
                        icon={<FaDollarSign className="info-icon" />}
                        value={company[0]?.specificCompanyInfo.annualRevenue || ''}
                        companyId={company[0]?._id}
                    />
                    <EditableField
                        label="Profit Margin"
                        fieldName="specificCompanyInfo.profitMargin"
                        icon={<FaPercent className="info-icon" />}
                        value={company[0]?.specificCompanyInfo.profitMargin || ''}
                        companyId={company[0]?._id}
                    />
                    <EditableField
                        label="Expenses Breakdown"
                        fieldName="specificCompanyInfo.expensesBreakdown"
                        icon={<FaCog className="info-icon" />}
                        value={company[0]?.specificCompanyInfo.expensesBreakdown || ''}
                        companyId={company[0]?._id}
                    />
                </div>
                <div className="container-information">
                    <EditableField
                        label="Number of Employees"
                        fieldName="specificCompanyInfo.numberOfEmployees"
                        icon={<FaUsers className="info-icon" />}
                        value={company[0]?.specificCompanyInfo.numberOfEmployees || ''}
                        companyId={company[0]?._id}
                    />
                    <EditableField
                        label="Employee Experience"
                        fieldName="specificCompanyInfo.employeeExperience "
                        icon={<FaUserTie className="info-icon" />}
                        value={company[0]?.specificCompanyInfo.employeeExperience || ''}
                        companyId={company[0]?._id}
                    />
                    <EditableField
                        label="Production Output"
                        fieldName="specificCompanyInfo.productionOutput"
                        icon={<FaTools className="info-icon" />}
                        value={company[0]?.specificCompanyInfo.productionOutput || ''}
                        companyId={company[0]?._id}
                    />
                </div>
            </Form>
        </div>
    );
};

export default Account;
