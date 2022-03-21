import React from 'react'

function Text(props) {
  return (
      <>
      <div className="banner-bottom">
          </div>
    <div>

        <section className='enjoy_main'>

            <div className="downloadingimage">
                <img className='part1img' src={props.tasveer} alt="Yaha tasveer Lagegi" />
                <div className="enjoy">
                    {props.reqText}
                </div>
            </div>
            <div className="banner-bottom"></div>


        </section>

    </div>
    
    </>
  )
}

export default Text