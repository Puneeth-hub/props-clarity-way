import DataList from './components/DataList';

import './App.css'


const messagesList = [{
  id: 1,
  subject: "Book of heard voice",
  body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  view_count: '30'
},
{
  id: 2,
  subject: "Book of heard voice and secnorio",
  body: " The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
  view_count: '50'
},
{
  id: 3,
  subject: "Voice over with my angel",
  body: "Many desktop publishing packages and web page editors now",
  view_count: '45'
},
{
  id: 4,
  subject: "Angel heart to broken",
  body: "use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover",
  view_count: '350'
},
{
  id: 5,
  subject: "Godse with work on iTalent",
  body: "Many web sites still in their infancy. Various versions have evolved",
  view_count: '60'
},
{
  id: 6,
  subject: "Hurting of heart solution it",
  body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,",
  view_count: '80'
},
{
  id: 7,
  subject: "A Time to Kill by John Grisham",
  body: "Contrary to popular belief, Lorem Ipsum is not simply random text",
  view_count: '70'
},
{
  id: 8,
  subject: "East of Eden by John Steinbeck",
  body: "Making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney ",
  view_count: '80'
},
{
  id: 9,
  subject: "The Sun Also Rises by Ernest Hemingway",
  body: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
  view_count: '650'
},

]

const App=()=> <DataList messagesList={messagesList}/>


export default App;