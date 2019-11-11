// React About page content component
// M. Allen - 2019

import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="App-body App-about">
        <div className="container App-content">
          <div className="row text-xs-center text-sm-left">
            <div className="col-xs-12 col-sm-6">
              <h2>Who are we?</h2>
              <p>
                We are a small charity working to take community aspirations and
                turn them into reality. We run a number of projects ourselves,
                but we also provide support to other local charities and
                community groups.
              </p>
              <p>
                MVCAP began life as "Malmesbury and the Villages Community Area
                Partnership" - part of a Wiltshire Council initiative to get
                representatives of local communities more involved in the
                decision making process and to provide funds for local projects.
                Over time, we became less about discussion and more about
                directly running projects. Past initiatives have included
                community surveys, walking groups, environmental projects, and
                health and wellbeing inititives. We also increasingly became
                involved in working with other groups, helping them to get
                projects off the ground - notably the Sherston Old School
                project and the Riverside Community Centre in Malmesbury.
              </p>
              <p>
                With the move to more direct activities it was recognised that a
                more formal organisation was required. In 2014 we successfully
                applied for CIO (Charitable Incorporated Organisation) status
                with the Charity Commission.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <h2>What do we do?</h2>
              <p>
                We can help by providing free websites, advice and support. We
                also have a limited pot of money available for small grants,
                primarily to help local community groups, charities, and
                projects get started.
              </p>
              <p>
                Cuts to community funding, particularly from Wiltshire Council
                as central government policies cut their available funds, have
                meant that it recent years we have had to severely cut our
                activities and drop our paid staff. This means that we can't
                give the level of support that we once did but we still strive
                to make a difference where we can.
              </p>
              <p>
                Our main current projects are the Malmesbury area walking group,
                Malmesbury Pathfinders (MAP) who promote walking in the area and
                have developed several walking trails. We also continue to give
                support to new community groups and the Riverside Centre.
              </p>
              <p>
                If you're a new community group seeking help to get up and
                running, or if you want to get involved, please get in touch.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
