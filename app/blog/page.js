'use client'
import NavbarLanding from 'components/navbar.js'
import VerticalTabs from 'components/blog/blog-vertical.js'
import SidebarWithCta from  'components/blog/blog-sidebar.js'

export default function Blog() {
    return (
       <div className="p-2">
            <NavbarLanding/>
            <div className="flex flex-row px-[20rem] gap-12">
               <SidebarWithCta/>
               <div className="text-blue-gray-50">
                    <h1 className="text-2xl font-extrabold py-2">Python Basics</h1>
                    <h1 className="text-xl font-semibold py-2">Declaring Variables</h1>
                    <p className="text-normal py-2">      
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit turpis a vulputate vehicula. Fusce molestie pretium dolor, quis molestie dui hendrerit mattis. Etiam mollis neque luctus nulla mollis, a condimentum arcu lobortis. Integer vel erat a leo ornare sagittis et ac ipsum. Sed nec commodo nisi, eu pellentesque felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris quis mauris gravida, ornare lorem non, congue ligula. Pellentesque eros libero, pellentesque a turpis eget, posuere sodales dui. Fusce mollis quam eget metus ultricies, rhoncus facilisis odio bibendum. Aliquam lacus sem, pulvinar in vehicula id, luctus non libero. Suspendisse rutrum velit quis porta euismod. Nam sit amet finibus dolor.

                        Quisque at commodo ipsum. Donec interdum massa quam, vel rutrum est accumsan quis. Praesent tempor iaculis enim. Fusce at laoreet tellus. Nullam mollis ut neque non mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc id mattis dui.

                        Mauris tempor, tellus non aliquet tempor, lorem nunc sollicitudin lectus, nec convallis orci diam vel purus. Aliquam erat volutpat. Aliquam tristique sollicitudin vulputate. Vestibulum orci enim, vulputate et mauris eget, tempus elementum nunc. Curabitur at libero eros. Cras pharetra bibendum fringilla. Nam viverra tempor metus rutrum finibus. Vestibulum dictum aliquam turpis quis sodales. Cras ligula massa, tincidunt in leo non, efficitur viverra metus.

                        Morbi et elit et nunc auctor dapibus ac eu nibh. Mauris tellus orci, blandit et sollicitudin id, vehicula a mauris. Integer sit amet eros in tortor condimentum rutrum. Fusce rutrum luctus felis, vitae pretium dui commodo ac. Nam nec sodales mi. Integer ut justo elit. Nam purus metus, aliquam ut ligula in, tristique mollis arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam velit justo, vehicula at nisl nec, fermentum lobortis nisl.

                        Quisque blandit venenatis lorem, nec varius nisi ultrices sed. Phasellus rhoncus massa leo, viverra dignissim elit lacinia eget. Ut a interdum nunc, sed pulvinar sem. Vivamus placerat turpis ut lectus feugiat semper. Integer eget dictum lacus. Donec eget lorem et eros lobortis placerat non eu nisl. Donec sem nulla, porttitor sed felis vitae, hendrerit tristique erat. Nunc egestas vel elit quis scelerisque. Mauris id augue condimentum nulla sollicitudin interdum sit amet ac nunc. Phasellus ligula tortor, tristique in egestas a, pretium vitae diam. Integer bibendum urna eu egestas tempus.
                    </p>          
               </div>
            </div>

       </div>
    )
}