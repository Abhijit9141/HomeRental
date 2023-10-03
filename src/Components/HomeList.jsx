import "../Styles/HomeList.css"

function CarList({ home }) {

    return (
    
 <div className="car-list-comp-box">    
            <img src={home.url} alt="" srcset="" />
            <div>{home.name}</div>
              <div>{home.address }</div>
            <div style={{ display: "flex", alignItems: "center",justifyContent:"space-between"  }}>
                <div> {home.rent }/month</div>
                    <button>Rent</button>
        </div>
    </div> 
    );
    }

export default CarList;


