import { Chip } from "../../interfaces";


export const CustomChip = (props : Chip) => {
    return (
        <div className="chip">
            <img src={props.avatar.src} alt={props.avatar.alt}/>
            <h5 className="chip-text">{props.text}</h5>
        </div>
    );
}