import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ForumIcon from '@mui/icons-material/Forum';
import HearingIcon from '@mui/icons-material/Hearing';
import SubjectIcon from '@mui/icons-material/Subject';
import ConstructionIcon from '@mui/icons-material/Construction';
import TheatersIcon from '@mui/icons-material/Theaters';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WorkIcon from '@mui/icons-material/Work';
import BiotechIcon from '@mui/icons-material/Biotech';
import CollectionsIcon from '@mui/icons-material/Collections';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

export const primaryNavList = [
  {
    title: 'Course Outline',
    loginRequired: false,
    route: '/course-outline',
    Icon: SubjectIcon,
    description: 'View the course outline to get an overview of the course',
  },
  {
    title: 'Forum',
    route: 'https://edstem.org/au/join/eAzdt4',
    external: true,
    loginRequired: true,
    Icon: ForumIcon,
    description: 'Post questions and get answers about course or content queries',
  },
  {
    title: 'Timetable',
    route: '/timetable',
    loginRequired: false,
    Icon: AccessTimeIcon,
    description: 'View the lecture, tutorial, and help session timetable',
  },
  {
    title: 'Content',
    loginRequired: true,
    Icon: CollectionsIcon,
    description: '',
    children: [
      {
        title: 'Lectures',
        route: '/content/lectures/week',
        Icon: TheatersIcon,
        description: 'View lecture content, slides, and videos',
      },
      {
        title: 'Tutorials',
        route: '/content/tutorials/week',
        Icon: SchoolIcon,
        description: 'View tutorial content, questions, and videos',
      },
    ],
  },
  {
    title: 'Assessments',
    loginRequired: true,
    Icon: ConstructionIcon,
    description: '',
    children: [
      {
        title: 'Assignments',
        route: '/assessments/assignments',
        Icon: WorkIcon,
        description: 'View major programing assignments provided in the course',
      },
      {
        title: 'Exam',
        route: '/assessments/exam',
        Icon: BiotechIcon,
        description: 'View information about the final exam in the course',
      },
    ],
  },
  {
    title: 'More Help',
    loginRequired: true,
    Icon: LocalHospitalIcon,
    description: '',
    children: [
      {
        title: 'Installation',
        route: '/help/installation',
        Icon: FileDownloadIcon,
        description: 'View simple instructions to get setup and ready for term',
      },
      {
        title: 'Resources',
        route: '/help/resources',
        Icon: LocalLibraryIcon,
        description: 'See a list of resources that can help you expand your knowledge',
      },
    ]
  },
];

export const secondaryNavList = [
  /*{
    title: 'Grades',
    loginRequired: true,
    route: '/grades',
    Icon: GradingIcon,
    description: 'View your grades from assessment task submissions',
  },*/
  {
    title: 'Feedback',
    loginRequired: true,
    route: 'https://docs.google.com/forms/d/e/1FAIpQLScTvTvH1Hm64hLefcMoZrhRzuyxcnZUw6ekOjHTF23cD8eweg/viewform',
    external: true,
    Icon: HearingIcon,
    description: 'Provide feedback to course staff if you have any comments to share',
  },
  {
    title: 'Source Code',
    loginRequired: true,
    route: 'https://github.com/chamhayden/eckles',
    external: true,
    Icon: CodeIcon,
    description: 'View the source code for this platform you\'re using',
  },
];
