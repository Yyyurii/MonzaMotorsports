import { useState } from 'react';
import { Collapse, Container } from 'react-bootstrap';

import './questions.scss';

import plus from '../../assets/img/plus.svg';

import QuestionsTitle from './QuestionsTitle';

function Questions() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <QuestionsTitle />
      <Container className="accordion">
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="accordion__btn-container"
        >1. Scope
          <div >

            <img className="" src={plus} alt="plus" />
          </div>
        </div>
        <Collapse in={open}>
          <div id="example-collapse-text" className="accordion__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta sed reiciendis sapiente illo dolorem quisquam sint quod fuga modi iusto nulla, quibusdam possimus! Hic suscipit modi quis voluptatibus ducimus at, ullam cumque nesciunt atque quaerat perferendis, explicabo animi, corporis recusandae natus iste harum ad! Similique quam sed, nulla alias deleniti quos dolore aut ad assumenda cupiditate dignissimos maiores minus ipsam laudantium suscipit architecto natus expedita consequatur sint, culpa dolorum nostrum? Fuga eveniet quod maiores voluptatibus doloremque, commodi quibusdam? Praesentium inventore eos non ullam tempora commodi perferendis! Blanditiis, cupiditate esse. Repudiandae, error magni mollitia ducimus adipisci dolore perferendis velit, dolorum vero praesentium aut quasi voluptate architecto nobis? Minima natus ipsum porro, dicta quos, dolorem sequi, perspiciatis quo nostrum iste impedit officiis praesentium in rerum placeat. Soluta quaerat, at vero unde nobis maiores ducimus incidunt nihil corrupti iste aperiam. Minima accusantium recusandae qui placeat harum quod ea, optio, illum, numquam fugit cumque? Consectetur facilis suscipit perspiciatis quo, sequi iure dolorum corrupti possimus aperiam tempora facere ullam voluptatem similique eaque beatae nobis fugit voluptate illum cumque optio praesentium repudiandae quaerat? Deserunt libero nisi corrupti molestiae aliquid recusandae. Sit culpa expedita architecto beatae, dolores, cum natus ullam reprehenderit at corporis ducimus ipsam neque quisquam!
          </div>
        </Collapse>
        <hr />
      </Container >
    </>
  );
}

export default Questions;