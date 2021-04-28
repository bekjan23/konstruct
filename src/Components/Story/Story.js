import { NavLink } from 'react-router-dom';
import './Story.css';

function Story() {
  return (
    <section className="middle">
      <div className="container">
        <h2 className="middle__title">OUR STORY</h2>
        <div className="middle__content">
          <div className="middle__info">
            <div className="middle__name">Founded in 2011 by John Mathew Smith,<NavLink exact to="/" className="blue">Konstruct</NavLink> has become the number one construction management firm</div>
            <div className="middle__text">Construction company "KONSTRUKT" implements projects using the latest technologies and always strives to create the best living conditions. Currently, we are cooperating with construction companies that are building multi-storey buildings in the city of Bishkek.</div>
          </div>
          <div className="middle__cards">
            <div className="card-1 middle__card"><p className="middle__card__title card__title">We Plan</p></div>
            <div className="card-2 middle__card"><p className="middle__card__title">We Manage</p></div>
            <div className="card-3 middle__card"><p className="middle__card__title">We Build</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
