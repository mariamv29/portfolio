import React from 'react';
import PhotoList from '../PhotoList';

function Gallery(props) {
    const {currentProject } = props;
    return (
        <section>
            <h1>{currentProject.name}</h1>
            <PhotoList category={currentProject.github} />
        </section>
    )
}

export default Gallery;