import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import RoadMapType from "../components/RoadMapType/RoadMapType";
import TimelineStepper from "../components/TimelineStepper/TimelineStepper";
// import MindMap from "../components/MindMap/MindMap";
// import GanttChart from "../components/GanttChart/GanttChart";
// import TimelineRoadmap from "../components/TimelineRoadmap/TimelineRoadmap";
import GanttStepper from "../components/GanttStepper/GanttStepper";
import MindMapStepper from "../components/MindMapStepper/MindMapStepper";
import RoadMap from "../pages/RoadMap";

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/roadmaptype',
        element: <RoadMapType></RoadMapType>,
      },
      {
        path: '/timeline',
        element: <TimelineStepper></TimelineStepper>
      },
      {
        path: '/mindmap',
        element: <MindMapStepper></MindMapStepper>
      },
      {
        path: '/gantt',
        element: <GanttStepper></GanttStepper>
      },
      {
        path: '/roadmap',
        element: <RoadMap></RoadMap>
      }
    ],
  },
]);