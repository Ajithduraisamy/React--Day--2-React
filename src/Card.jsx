import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

function Card({ data }) {
    return (
        <div class="col-md-4">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h6 class="card-title pricing-card-title">
                        {data.pretitle}
                    </h6>
                    <h3 class="my-0">{data.title}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                        {data.merits.map((element, index) => {
                            return <li key={index}>
                                {
                                    element.enabled ? <span><TiTick />{element.name}</span> : <span className="text-muted"><RxCross2 />{element.name}</span>
                                }</li>;
                        })
                        }
                    </ul>
                    <button type="button" class={`w-100 btn btn-lg ${data.buttonFocus ? 'btn-primary' : 'btn-outline-primary'}`}>{
                    }
                        {data.buttonName}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Card;
