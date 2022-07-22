import React from 'react';

function Resume() {

    return(
        <section id='resume' className="content py-3 my-2">
            <h2 className="content-title text-2xl">Resume</h2>
            <div className='w-full h-96 mt-4'>
                <embed
                    className='w-full h-96' 
                    src={require("../../assets/resume.pdf")} 
                    type="application/pdf">
                </embed>
            </div>
            <p className='p-1 mt-3'>click 
                <a className='px-1 text-tertiary' href={require("../../assets/resume.pdf")}>
                    here
                </a>                
                to download
            </p>
        </section>
    )
}

export default Resume;