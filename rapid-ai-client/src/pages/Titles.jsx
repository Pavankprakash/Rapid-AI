import { useState } from "react";
import TitleForm from "../components/title/TitleForm";
import TitleResult from "../components/title/TitleResult";

function Titles() {

    const [titles, setTitles] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

            <TitleForm
                setTitles={setTitles}
                setLoading={setLoading}
                loading={loading}
            />
            <TitleResult
                titles={titles}
                loading={loading}
            />
        </div>
    );
}
export default Titles;