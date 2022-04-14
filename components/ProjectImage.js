const ProjectImage = (props) => (  
  <div className='-order-5 self-start grid border-2 rounded-lg border-stone-400 p-1'>
    <img 
      {...props}
      className='rounded w-full h-40 object-cover bp600:h-44 md:h-48'
    />
  </div>
);

 
export default ProjectImage;