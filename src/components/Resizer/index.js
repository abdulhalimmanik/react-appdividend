import React, { Component } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'; // see installation section above for versions of NPM older than 3.0.0
// If you choose not to use import, you need to assign Cropper to default
// var Cropper = require('react-cropper').default

const cropper = React.createRef(null);

class Demo extends Component {

    state = {
        loading: false,
        width: 100,
        height: 100,

    }

    _crop() {
        // image in dataUrl
        console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
    }

    render() {
        return (
            <Cropper
                ref={cropper}
                src='http://roadmanfong.github.io/react-cropper/example/img/child.jpg'
                style={{ height: 400, width: '100%' }}
                // Cropper.js options
                aspectRatio={16 / 9}
                guides={false}
                crop={this._crop.bind(this)} />
        );
    }
}

export default Demo

// import React, { Component, PureComponent } from 'react';
// // import Resizer from 'react-image-file-resizer';
// // import React, { PureComponent } from 'react';
// import ReactCrop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         // this.fileChangedHandler = this.fileChangedHandler.bind(this);
//         // this.handleLoadAvatar = this.handleLoadAvatar.bind(this);
//     }

// fileChangedHandler(event) {
//     var fileInput = false
//     if (event.target.files[0]) {
//         fileInput = true
//     }
//     if (fileInput) {
//         Resizer.imageFileResizer(
//             event.target.files[0],
//             300,
//             300,
//             'JPEG',
//             100,
//             0,
//             uri => {
//                 console.log(uri)
//             },
//             'base64'
//         );
//     }
// }

// handleLoadAvatar(e) {
//     var file = e.target.files[0];
//     var reader = new FileReader();
//     reader.onload = (e) => {
//         var img = document.createElement("img");
//         img.onload = () => {
//             var canvas = document.createElement('canvas');
//             var ctx = canvas.getContext("2d");
//             ctx.drawImage(img, 0, 0);

//             var MAX_WIDTH = 300;
//             var MAX_HEIGHT = 300;
//             var width = img.width;
//             var height = img.height;

//             if (width > height) {
//                 if (width > MAX_WIDTH) {
//                     height *= MAX_WIDTH / width;
//                     width = MAX_WIDTH;
//                 }
//             } else {
//                 if (height > MAX_HEIGHT) {
//                     width *= MAX_HEIGHT / height;
//                     height = MAX_HEIGHT;
//                 }
//             }
//             canvas.width = width;
//             canvas.height = height;
//             var ctx = canvas.getContext("2d");
//             ctx.drawImage(img, 0, 0, width, height);
//             var dataurl = canvas.toDataURL("image/png");
//             this.setState({ previewSrc: dataurl });
//         }
//         img.src = e.target.result;
//         // console.log(img.src)
//     }
//     reader.readAsDataURL(file);
// }

//     render() {
//         return (
//             <div className="App">
//                 {/* <input type="file" onChange={this.fileChangedHandler} /> */}
//                 {/* <input type="file" name="file" onChange={this.handleLoadAvatar} /> */}
//             </div>
//         );
//     }
// }

// class App extends PureComponent {
//     state = {
//         src: null,
//         crop: {
//             unit: '%',
//             width: 30,
//         },
//     };

//     onSelectFile = e => {
//         if (e.target.files && e.target.files.length > 0) {
//             const reader = new FileReader();
//             reader.addEventListener('load', () =>
//                 this.setState({ src: reader.result })
//             );
//             reader.readAsDataURL(e.target.files[0]);
//         }
//     };

//     // If you setState the crop in here you should return false.
//     onImageLoaded = image => {
//         this.imageRef = image;
//     };

//     onCropComplete = crop => {
//         this.makeClientCrop(crop);
//     };

//     onCropChange = (crop, percentCrop) => {
//         // You could also use percentCrop:
//         // this.setState({ crop: percentCrop });
//         this.setState({ crop });
//     };

//     async makeClientCrop(crop) {
//         if (this.imageRef && crop.width && crop.height) {
//             const croppedImageUrl = await this.getCroppedImg(
//                 this.imageRef,
//                 crop,
//                 'newFile.jpeg'
//             );
//             this.setState({ croppedImageUrl });
//         }
//     }

//     getCroppedImg(image, crop, fileName) {
//         const canvas = document.createElement('canvas');
//         const scaleX = image.naturalWidth / image.width;
//         const scaleY = image.naturalHeight / image.height;
//         canvas.width = crop.width;
//         canvas.height = crop.height;
//         const ctx = canvas.getContext('2d');

//         ctx.drawImage(
//             image,
//             crop.x * scaleX,
//             crop.y * scaleY,
//             crop.width * scaleX,
//             crop.height * scaleY,
//             0,
//             0,
//             crop.width,
//             crop.height
//         );

//         return new Promise((resolve, reject) => {
//             canvas.toBlob(blob => {
//                 if (!blob) {
//                     //reject(new Error('Canvas is empty'));
//                     console.error('Canvas is empty');
//                     return;
//                 }
//                 blob.name = fileName;
//                 window.URL.revokeObjectURL(this.fileUrl);
//                 this.fileUrl = window.URL.createObjectURL(blob);
//                 resolve(this.fileUrl);
//             }, 'image/jpeg');
//         });
//     }

//     render() {
//         const { crop, croppedImageUrl, src } = this.state;
//         console.log(croppedImageUrl)
//         return (
//             <div className="App">
//                 <div>
//                     <input type="file" accept="image/*" onChange={this.onSelectFile} />
//                 </div>
//                 {src && (
//                     <ReactCrop
//                         src={src}
//                         crop={crop}
//                         ruleOfThirds
//                         onImageLoaded={this.onImageLoaded}
//                         onComplete={this.onCropComplete}
//                         onChange={this.onCropChange}
//                     />
//                 )}
//                 {croppedImageUrl && (
//                     <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
//                 )}
//             </div>
//         );
//     }
// }

// export default App;