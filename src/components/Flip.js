import React from 'react'
import './Flip.css'
function Flip() {

  
  return (
    <>


<div className="modalClass">
<button type="button" className="btn btn-success gaurav" data-toggle="modal" data-target="#exampleModalCenter">
  Go to Seasons - Series
</button>


<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Demon Slayer</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" className='cross'>&times;</span>
        </button>
      </div>
      <div className="modal-body slayer">
        <img src="https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/03/demon-slayer-banner.jpg" alt="" className="seasonImg"/>
        {/* "https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/03/demon-slayer-banner.jpg" */}
        
        <div className="text mx-2 my-2">Tanjiro enters the Final Selection, where he and the others like him who aspire to be a Demon Slayer, must survive for seven days among demons trapped alive by Demon Slayers. Tanjiro survives for the seven days in the Final Slection and finds only four had survived Final Selection, including himself.</div>
        {/* https://marketresearchtelecast.com/wp-content/uploads/2021/07/1626189177_Kimetsu-no-Yaiba-Demon-Slayer-Season-2-New-trailer-1280x720.jpg */}
      </div>
      <div className="modal-footer just">
        <button type="button" className="btn btn-secondary clsbtn" data-dismiss="modal">Close</button>
        <a href="https://drive.google.com/drive/folders/1ixpIVxntp4ZTpcz5EBCJSWI4B_Iel7cX?usp=sharing" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-danger">Watch Season 1</button></a>
        <a href="https://drive.google.com/drive/folders/1iLjCGadwa9RXsaplK4VXDCyD9d3PNBL-?usp=sharing" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-danger">Watch Season 2</button></a>
      </div>
    </div>
  </div>
</div>

</div>

{/* ye alag */}



    </>
  )
}

export default Flip