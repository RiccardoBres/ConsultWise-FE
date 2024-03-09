import React from 'react';
import CustomTitle from '../../../Atoms/CustomTitle';
import CustomParagraph from '../../../Atoms/CustomParagraph';
import './Forms.css';

const SpecificCompanyInformation = ({ register }) => {
    return (
        <div className="container-specific-information">
            <CustomTitle className='medium-title' text='Specific Company Information' />
            <CustomParagraph className='medium-p' text='Provide detailed information for a more accurate consultation.' />

            {/* Financial Information Section */}
            <div className="form-section">
                <CustomTitle text='Financial Information' className='small-title' />
                <div className="form-group flex-column">
                    <label htmlFor="annualRevenue">Annual Revenue (in USD)</label>
                    <input id="annualRevenue" className='form-control' {...register('specificCompanyInfo.annualRevenue')} type="number" />
                    <label htmlFor="profitMargin">Profit Margin (%)</label>
                    <input id="profitMargin" className='form-control' {...register('specificCompanyInfo.profitMargin')} type="number" />
                    <label htmlFor="numberOfEmployees">Number of Employees</label>
                    <input id="numberOfEmployees" className='form-control' {...register('specificCompanyInfo.numberOfEmployees')} type="number" />
                </div>
            </div>

            {/* Employee Experience Section */}
            <div className="form-section">
                <CustomTitle text='Employee Experience' className='small-title' />
                <div className="form-group d-flex flex-column">
                    <label htmlFor="employeeExperience">Describe the overall experience of your employees in the company.</label>
                    <textarea id="employeeExperience" className='form-control' {...register('specificCompanyInfo.employeeExperience')}></textarea>
                </div>
            </div>

            {/* Key Challenges and Strategic Goals Section */}
            <div className="form-section">
                <CustomTitle text='Key Challenges and Strategic Goals' className='small-title' />
                <div className="form-group d-flex flex-column">
                    <label htmlFor="keyChallenges">Describe the key challenges your company is currently facing. (Separate by comma)</label>
                    <textarea id="keyChallenges" className='form-control' {...register('specificCompanyInfo.keyChallenges')}></textarea>
                    <label htmlFor="strategicGoals">Describe the strategic goals your company aims to achieve. (Separate by comma)</label>
                    <textarea id="strategicGoals" className='form-control' {...register('specificCompanyInfo.strategicGoals')}></textarea>
                </div>
            </div>

            {/* Expenses and Investments Section */}
            <div className="form-section">
                <CustomTitle text='Expenses and Investments' className='small-title' />
                <div className="form-group d-flex flex-column">
                    <label htmlFor="expensesBreakdown">Provide a breakdown of your company expenses, specifying major categories and amounts.</label>
                    <textarea id="expensesBreakdown" className='form-control' {...register('specificCompanyInfo.expensesBreakdown')}></textarea>
                    <label htmlFor="investmentAllocation">Specify how your company allocates investments across different areas.</label>
                    <textarea id="investmentAllocation" className='form-control' {...register('specificCompanyInfo.investmentAllocation')}></textarea>
                </div>
            </div>

            {/* Production and Efficiency Section */}
            <div className="form-section">
                <CustomTitle text='Production and Efficiency' className='small-title' />
                <div className="form-group d-flex flex-column">
                    <label htmlFor="productionOutput">Production Output (units):</label>
                    <input id="productionOutput" className='form-control' {...register('specificCompanyInfo.productionOutput')} type="number" />
                    <label htmlFor="efficiencyMetrics">Efficiency Metrics (e.g., productivity ratios, resource utilization):</label>
                    <input id="efficiencyMetrics" className='form-control' {...register('specificCompanyInfo.efficiencyMetrics')} type="number" />
                </div>
            </div>

            {/* Customer and Market Section */}
            <div className="form-section">
                <CustomTitle text='Customer and Market' className='small-title' />
                <div className="form-group d-flex flex-column">
                    <label htmlFor="customerRetentionRate">Customer Retention Rate (%):</label>
                    <input id="customerRetentionRate" className='form-control' {...register('specificCompanyInfo.customerRetentionRate')} type="number" />
                    <label htmlFor="customerSatisfaction">Customer Satisfaction (on a scale of 1-10):</label>
                    <input id="customerSatisfaction" className='form-control' {...register('specificCompanyInfo.customerSatisfaction')} type="number" />
                    <label htmlFor="technologyAdoptionRate">Technology Adoption Rate (% of adoption):</label>
                    <input id="technologyAdoptionRate" className='form-control' {...register('specificCompanyInfo.technologyAdoptionRate')} type="number" />
                </div>
            </div>

            {/* Innovation and Compliance Section */}
            <div className="form-section">
                <CustomTitle text='Innovation and Compliance' className='small-title' />
                <div className="form-group d-flex flex-column">
                    <label htmlFor="innovationProjects">Innovation Projects (number of ongoing projects):</label>
                    <input id="innovationProjects" className='form-control' {...register('specificCompanyInfo.innovationProjects')} type="number" />
                    <label htmlFor="complianceStatus">Compliance Status (compliance with industry standards):</label>
                    <input id="complianceStatus" className='form-control' {...register('specificCompanyInfo.complianceStatus')} />
                    <label htmlFor="riskAssessment">Risk Assessment (current risk level):</label>
                    <input id="riskAssessment" className='form-control' {...register('specificCompanyInfo.riskAssessment')} />
                    <label htmlFor="conversionRates">Conversion Rates (% of successful conversions):</label>
                    <input id="conversionRates" className='form-control' {...register('specificCompanyInfo.conversionRates')} type="number" />
                    <label htmlFor="customerAcquisitionCost">Customer Acquisition Cost (in USD):</label>
                    <input id="customerAcquisitionCost" className='form-control' {...register('specificCompanyInfo.customerAcquisitionCost')} type="number" />
                </div>
            </div>

            {/* Environmental Impact Section */}
            <div className="form-section">
                <CustomTitle text='Environmental Impact' className='small-title' />
                <div className="form-group d-flex flex-column">
                    <label htmlFor="carbonFootprint">Carbon Footprint (carbon emissions in metric tons):</label>
                    <input id="carbonFootprint" className='form-control' {...register('specificCompanyInfo.carbonFootprint')} type="number" />
                    <label htmlFor="sustainabilityInitiatives">Sustainability Initiatives (describe any eco-friendly practices or initiatives):</label>
                    <textarea id="sustainabilityInitiatives" className='form-control' {...register('specificCompanyInfo.sustainabilityInitiatives')}></textarea>
                </div>
            </div>
        </div>
    );
};

export default SpecificCompanyInformation;
