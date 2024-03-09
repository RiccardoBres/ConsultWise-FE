import React from 'react';
import CustomParagraph from '../../../Atoms/CustomParagraph';
import CustomTitle from '../../../Atoms/CustomTitle'

const GeneralInformation = ({ register, errors }) => {
  return (
    <div className="container-general-information">
      <CustomTitle className='medium-title' text='General Information' />
      <CustomParagraph className='medium-p' text='Please provide basic information about your company.' />
      <div className="form-group">
        <input className='form-control' {...register('companyName', { required: 'Company Name is required' })} placeholder="Company Name" />
        {errors.companyName && <span>{errors.companyName.message}</span>}
        <input className='form-control' {...register('industry', { required: 'Industry is required' })} placeholder="Industry" />
        {errors.industry && <span>{errors.industry.message}</span>}
        <input className='form-control' {...register('location')} placeholder="Location" />
      </div>
    </div>
  );
};

export default GeneralInformation;
