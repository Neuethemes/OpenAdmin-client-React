import React, {Component} from 'react';

class NavsPage extends Component {

  render() {
    return (
      <div className="content-wrapper container-fluid px-5 mt-5 mb-4 trans-03-in-out">


        <h3 className="fw-200 pb-3 pt-3">Navs</h3>

        <div className="row">

          <div className="col-lg-12">
            <section className="widget shadow-01" id="widget-01">
              <div className="widget-block">

                <header>
                  <h3 className="widget-title">Base nav</h3>
                  <p>The base <code className="highlighter-rouge">.nav</code> component is built with flexbox and provide a strong foundation for building all
                    types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and
                    basic disabled styling.</p>
                </header>

                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example">
                      <ul className="nav">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <div className="col-lg-12">
            <section className="widget shadow-01" id="widget-02">
              <div className="widget-block">

                <header>
                  <h3 className="widget-title">Base nav centered</h3>
                  <p>Centered with <code className="highlighter-rouge">.justify-content-center</code>:</p>
                </header>

                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example">
                      <ul className="nav justify-content-center">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <div className="col-lg-12">
            <section className="widget shadow-01" id="widget-03">
              <div className="widget-block">

                <header>
                  <h3 className="widget-title">Base nav right-aligned</h3>
                  <p>Centered with <code className="highlighter-rouge">.justify-content-end</code>:</p>
                </header>

                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example">
                      <ul className="nav justify-content-end">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <div className="col-lg-6">
            <section className="widget shadow-01" id="widget-04">
              <div className="widget-block">

                <header>
                  <h3 className="widget-title">Nav vertical</h3>
                  <p>Stack your navigation by changing the flex item direction with the <code className="highlighter-rouge">.flex-column</code> utility. Need to
                    stack them on some viewports but not others? Use the responsive versions (e.g., <code className="highlighter-rouge">.flex-sm-column</code>).
                  </p>
                </header>

                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <div className="col-lg-6">
            <section className="widget shadow-01" id="widget-05">
              <div className="widget-block">

                <header>
                  <h3 className="widget-title">Nav vertical without ul</h3>
                  <p>As always, vertical navigation is possible without <code className="highlighter-rouge">&lt;ul&gt;</code>s, too.</p>
                </header>

                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example">
                      <nav className="nav flex-column">
                        <a className="nav-link active" href="#">Active</a>
                        <a className="nav-link" href="#">Link</a>
                        <a className="nav-link" href="#">Link</a>
                        <a className="nav-link disabled" href="#">Disabled</a>
                      </nav>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <div className="col-lg-6">
            <section className="widget shadow-01" id="widget-06">
              <div className="widget-block">

                <header>
                  <h3 className="widget-title">Tabs</h3>
                  <p>Takes the basic nav from above and adds the <code className="highlighter-rouge">.nav-tabs</code> class to generate a tabbed interface. Use
                    them to create tabbable regions.</p>
                </header>

                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example bd-example-tabs">
                      <ul className="nav nav-tabs" id="myTab1" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link" id="home-tab1" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="profile-tab1" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                             aria-selected="false">Profile</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
                             aria-selected="true">Contact</a>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent1">
                        <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                            Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby
                            sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                            american apparel, butcher voluptate nisi qui.</p>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                          <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog
                            sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress,
                            commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic
                            magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum
                            wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown,
                            tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                        </div>
                        <div className="tab-pane fade active show" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                          <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi
                            farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia
                            banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever
                            gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them,
                            vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <div className="col-lg-6">
            <section className="widget shadow-01" id="widget-07">
              <div className="widget-block">

                <header>
                  <h3 className="widget-title">Pills</h3>
                  <p>Take that same HTML, but use <code className="highlighter-rouge">.nav-pills</code> instead:</p>
                </header>

                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example bd-example-tabs">
                      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home"
                             aria-selected="true">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile"
                             aria-selected="false">Profile</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact"
                             aria-selected="false">Contact</a>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                          <p>Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident
                            aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud
                            sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu
                            exercitation irure Lorem incididunt nostrud.</p>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                          <p>Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint
                            nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id
                            et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea
                            tempor duis.</p>
                        </div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                          <p>Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi
                            elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do
                            fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit
                            cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt
                            tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur
                            culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud
                            adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <div className="col-lg-12">
            <section className="widget shadow-01" id="widget-08">
              <div className="widget-block">

                <header>
                  <h3 className="widget-title">Vertical Pills</h3>
                </header>

                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example bd-example-tabs">
                      <div className="row">
                        <div className="col-3">
                          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home"
                               aria-selected="false">Home</a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab"
                               aria-controls="v-pills-profile"
                               aria-selected="false">Profile</a>
                            <a className="nav-link active" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab"
                               aria-controls="v-pills-messages" aria-selected="true">Messages</a>
                            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab"
                               aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                          </div>
                        </div>
                        <div className="col-9">
                          <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                              <p>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magna
                                mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit excepteur laborum mollit dolore
                                eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum
                                eu deserunt excepteur ea incididunt minim occaecat.</p>
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                              <p>Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna pariatur
                                consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit id veniam. Quis ut consectetur
                                adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id
                                officia mollit qui esse anim eiusmod do sint minim consectetur qui.</p>
                            </div>
                            <div className="tab-pane fade active show" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                              <p>Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident laboris ullamco esse anim
                                Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla. Velit et et proident Lorem do ea tempor officia dolor.
                                Reprehenderit Lorem aliquip labore est magna commodo est ea veniam consectetur.</p>
                            </div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                              <p>Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor proident in cupidatat
                                officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui mollit consectetur nulla mollit velit
                                aliqua veniam nisi id do Lorem deserunt amet. Culpa ullamco sit adipisicing labore officia magna elit nisi in aute tempor
                                commodo eiusmod.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

        </div>

      </div>
    );
  }
}

export default NavsPage;
