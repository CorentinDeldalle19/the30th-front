import Navbar from "../components/Navbar";
import Card from "../components/Card";

import c from "../media/c.png";
import python from '../media/python.png'
import javascript from '../media/javascript.png'
import work from '../media/work.png'

import '../components/styles/dashboard.css'

function Languages(){
    return (
        <div>
            <Navbar />
            <div className="page">
                <h2 className="title">All languages</h2>
                <div className="cards3">
                    <Card title="Python" image={python} link="Discover →"/>
                    <Card title="C" image={c} link="Discover →"/>
                    <Card title="C" image={c} link="Discover →"/>
                    <Card title="C" image={c} link="Discover →"/>
                    <Card title="C" image={c} link="Discover →"/>
                    <Card title="C" image={c} link="Discover →"/>
                    <Card title="Python" image={python} link="Discover →"/>
                    <Card title="C" image={c} link="Discover →"/>
                    <Card title="C" image={c} link="Discover →"/>
                    <Card title="C" image={c} link="Discover →"/>
                    <Card title="C" image={c} link="Discover →"/>
                    <Card title="C" image={c} link="Discover →"/>
                </div>
            </div>
        </div>
    )
}

export default Languages;