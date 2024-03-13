import { body, ValidationChain,validationResult } from 'express-validator'
import {Request,Response,NextFunction} from 'express'
export const validate = async (validations: ValidationChain[]) => {
        return async (req: Request, res: Response, next: NextFunction) => {
            for (let validation of validations) {
              const result = await validation.run(req);
              if (!result.isEmpty()) {
                break;
              }
            }
            const errors = validationResult(req);
            if (errors.isEmpty()) {
              return next();
            }
            return res.status(422).json({ errors: errors.array() });
    }
}
export const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").trim().isEmail().withMessage("email is required"),
    body("password").trim().isLength({ min: 6 }).withMessage("password is required")
]