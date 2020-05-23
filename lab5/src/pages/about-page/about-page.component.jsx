import './about-page.styles.css';
import React, { useState } from 'react';
import { GenericButton } from '../../components/generic-button/generic-button.component';

export const AboutPage = (props) => {
    const [wrapText, setWrapText] = useState(true);

    // this.handleChange =

    let moreText;
    let buttonValue = "More";
    if (!wrapText) {
        buttonValue = "Less";
        moreText = <p>
            Integer vitae rutrum ex. Sed consectetur euismod est, quis tincidunt lacus ultricies sed. Proin vel ultrices mi, in tempor arcu. Vestibulum sagittis ultrices risus, vel mollis elit bibendum gravida. Cras laoreet suscipit ligula ut rutrum. Aliquam euismod ornare mi vitae porttitor. Pellentesque luctus tellus diam, ut porta risus fermentum ut. Pellentesque lacus sem, laoreet in nunc a, dictum congue turpis. Nunc nisl libero, sagittis a purus vel, hendrerit lobortis enim. Fusce ac turpis et libero hendrerit fringilla. Morbi bibendum ex a auctor varius. Mauris a urna justo.
            <br />
            <br />

            Vivamus sit amet lacus porta, venenatis elit ut, pharetra urna. Donec eget porttitor augue, non eleifend erat. Sed tempor mattis velit, sollicitudin congue neque rutrum non. Cras ac dapibus velit. Sed sit amet metus massa. Aliquam consequat feugiat erat, non blandit urna malesuada a. Quisque tristique venenatis tortor, in vehicula mauris elementum quis. Integer consectetur blandit justo sit amet lobortis. Donec sollicitudin convallis lacinia. Curabitur nec libero in eros hendrerit euismod. Morbi ex magna, facilisis a malesuada a, semper a nibh. Etiam pulvinar maximus mi ac rutrum.
        </p>
    }

    return (
        <div className="AboutPage-container">
            <h3>About us</h3>
            <p className="AboutPage-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor quam nunc, vel malesuada diam ultrices quis. In ut massa quis est pulvinar sodales quis sed orci. Praesent auctor sem lorem, convallis venenatis mi feugiat in. Phasellus auctor nulla tellus, at posuere metus eleifend et. Integer dolor massa, tincidunt non posuere non, egestas non nisl. In ullamcorper scelerisque eros sit amet mollis. Pellentesque molestie volutpat sollicitudin. Morbi in sagittis neque, sed commodo diam. Phasellus dapibus sapien ac justo varius suscipit. Integer eu ligula a purus molestie mattis. Donec rhoncus vehicula purus, at lacinia elit sollicitudin at. Nulla tincidunt faucibus fringilla. Duis sit amet leo interdum, interdum turpis ultricies, hendrerit eros.
                <br />
                <br />

                Vivamus molestie nisl elit, at fermentum risus convallis et. Praesent tincidunt purus ut orci aliquam porttitor. Mauris consectetur eros augue, non blandit tortor egestas maximus. Nulla sollicitudin odio ut egestas dapibus. In sagittis ut dolor pellentesque hendrerit. Aliquam sit amet velit eu libero viverra fringilla nec nec ipsum. Etiam consequat orci non felis vulputate, eget faucibus orci dictum. Aenean quis leo mattis, maximus nibh vel, eleifend augue. Cras hendrerit aliquam sapien ut feugiat. Morbi mattis congue dui et commodo. Nullam ullamcorper dignissim ex at gravida.
                <br />
                <br />

                Nullam ullamcorper mattis lectus, nec mollis nisi laoreet vitae. Vivamus sagittis dignissim sem at molestie. Curabitur eget elit turpis. Quisque ac dui a sem convallis euismod. Curabitur finibus volutpat tellus, id volutpat urna aliquam nec. Mauris vel diam eget nisl venenatis scelerisque. Aliquam consequat elit dui, et tempus nulla ornare eget. Proin tempus mollis odio ut eleifend. Suspendisse non purus massa. Nunc ac ultricies lacus.
                <br />
                <br />
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor quam nunc, vel malesuada diam ultrices quis. In ut massa quis est pulvinar sodales quis sed orci. Praesent auctor sem lorem, convallis venenatis mi feugiat in. Phasellus auctor nulla tellus, at posuere metus eleifend et. Integer dolor massa, tincidunt non posuere non, egestas non nisl. In ullamcorper scelerisque eros sit amet mollis. Pellentesque molestie volutpat sollicitudin. Morbi in sagittis neque, sed commodo diam. Phasellus dapibus sapien ac justo varius suscipit. Integer eu ligula a purus molestie mattis. Donec rhoncus vehicula purus, at lacinia elit sollicitudin at. Nulla tincidunt faucibus fringilla. Duis sit amet leo interdum, interdum turpis ultricies, hendrerit eros.
                <br />
                <br />

                {moreText}
                <div className="AboutPage-button-wrapper">
                    <GenericButton onClick={() => {
                        setWrapText(!wrapText)
                    }} value={buttonValue} />
                </div>
            </p>
        </div>
    )
}