
import express from "express";
import {
	VideoDB,
	CreateThumbnail,
	IMAGE_PATH,
	UPLOAD_PATH,
} from '../../utilities';
import bunyan from "bunyan";
const logger = bunyan.createLogger({ name: "videoController" });

/**
  * Get list of avaialble videos
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
const getVideos = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    logger.info("request list of available videos ", VideoDB);
    res.status(200).json({
      result: VideoDB || {}
    });
    return next();
  } catch (e) {
    logger.error("error in fetching Videos list: ", e);
    return res.status(500).json(e);
  }
};

/**
  * Upload video and store details in VideoDB
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
const uploadVideo = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    let file = req.file;
    CreateThumbnail(file.filename).then((_success) => {
		const savedVideoDetails = {
			id: file.filename,
			name: file.originalname,
			size: file.size,
			path: `${UPLOAD_PATH}\\${file.filename}`,
			encoding: file.encoding,
			mimetype: file.mimetype,
			details: req.body.details ? req.body.details : '',
			screenshot: `${IMAGE_PATH}\\${file.filename}.png`,
		};
		// save uploaded vidoe file in VideoDB
		VideoDB[file.filename] = savedVideoDetails;
		logger.info('successfully uploaded a video file : ', savedVideoDetails);
		res.send({ result: savedVideoDetails });
	});
  } catch (err) {
    logger.error("error in uploading video file : ", err);
    res.status(500).json(err);
  }
};

export { uploadVideo, getVideos };
