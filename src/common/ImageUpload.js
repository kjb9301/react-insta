const aws = require('aws-sdk');
// const path = require('path');
const s3 = new aws.S3();

const ImageUpload = async (originalImage, directory) => {
  //if(typeof width !== 'number' || typeof height !== 'number') throw new Error('이미지 사이즈는 숫자로 입력해주세요!');
  try {
    const uploadedResults = [];
    for(let image of originalImage) {     

      aws.config.region = "ap-northeast-2";
      aws.config.update({
        accessKeyId: "AKIAIT6AJBVJWA3QE2GA",
        secretAccessKey: "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"
      })
      console.log(image)
      const params = {
        Bucket: 'fiftybridge-insta/' + directory,
        Key: 'fiftybridge-insta' + image.name,
        ACL: 'public-read',
        Body: require('fs').createReadStream(image.path)
      }

      const result = await s3.upload(params).promise();
      uploadedResults.push(result);
    }
    return uploadedResults;
  } catch(e) {
    console.log(e);
    return 'Internal Server Error';
  }
}

export default ImageUpload;