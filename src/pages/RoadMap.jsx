import GanttChart from "../components/GanttChart/GanttChart";
import MindMap from "../components/MindMap/MindMap";
import TimelineRoadmap from "../components/TimelineRoadmap/TimelineRoadmap";

const RoadMap = () => {
    return (
        <>
            <TimelineRoadmap></TimelineRoadmap>
            <GanttChart></GanttChart>
            <MindMap></MindMap>
        </>
    );
};

export default RoadMap;