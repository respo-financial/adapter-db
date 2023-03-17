import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { UserDetailController } from "../userDetail.controller";
import { UserDetailService } from "../userDetail.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: "exampleUserId",
  isPersonalEmailVerified: "true",
  mobileNumber: "exampleMobileNumber",
  userProvidedFirstName: "exampleUserProvidedFirstName",
  userProvidedLastName: "exampleUserProvidedLastName",
  aadhaarName: "exampleAadhaarName",
  aadhaarDob: new Date(),
  panName: "examplePanName",
  pan: "examplePan",
  panDob: new Date(),
  firstName: "exampleFirstName",
  lastName: "exampleLastName",
  personalEmail: "examplePersonalEmail",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: "exampleUserId",
  isPersonalEmailVerified: "true",
  mobileNumber: "exampleMobileNumber",
  userProvidedFirstName: "exampleUserProvidedFirstName",
  userProvidedLastName: "exampleUserProvidedLastName",
  aadhaarName: "exampleAadhaarName",
  aadhaarDob: new Date(),
  panName: "examplePanName",
  pan: "examplePan",
  panDob: new Date(),
  firstName: "exampleFirstName",
  lastName: "exampleLastName",
  personalEmail: "examplePersonalEmail",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "exampleUserId",
    isPersonalEmailVerified: "true",
    mobileNumber: "exampleMobileNumber",
    userProvidedFirstName: "exampleUserProvidedFirstName",
    userProvidedLastName: "exampleUserProvidedLastName",
    aadhaarName: "exampleAadhaarName",
    aadhaarDob: new Date(),
    panName: "examplePanName",
    pan: "examplePan",
    panDob: new Date(),
    firstName: "exampleFirstName",
    lastName: "exampleLastName",
    personalEmail: "examplePersonalEmail",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: "exampleUserId",
  isPersonalEmailVerified: "true",
  mobileNumber: "exampleMobileNumber",
  userProvidedFirstName: "exampleUserProvidedFirstName",
  userProvidedLastName: "exampleUserProvidedLastName",
  aadhaarName: "exampleAadhaarName",
  aadhaarDob: new Date(),
  panName: "examplePanName",
  pan: "examplePan",
  panDob: new Date(),
  firstName: "exampleFirstName",
  lastName: "exampleLastName",
  personalEmail: "examplePersonalEmail",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("UserDetail", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserDetailService,
          useValue: service,
        },
      ],
      controllers: [UserDetailController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /userDetails", async () => {
    await request(app.getHttpServer())
      .post("/userDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        aadhaarDob: CREATE_RESULT.aadhaarDob.toISOString(),
        panDob: CREATE_RESULT.panDob.toISOString(),
      });
  });

  test("GET /userDetails", async () => {
    await request(app.getHttpServer())
      .get("/userDetails")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          aadhaarDob: FIND_MANY_RESULT[0].aadhaarDob.toISOString(),
          panDob: FIND_MANY_RESULT[0].panDob.toISOString(),
        },
      ]);
  });

  test("GET /userDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        aadhaarDob: FIND_ONE_RESULT.aadhaarDob.toISOString(),
        panDob: FIND_ONE_RESULT.panDob.toISOString(),
      });
  });

  test("POST /userDetails existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/userDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        aadhaarDob: CREATE_RESULT.aadhaarDob.toISOString(),
        panDob: CREATE_RESULT.panDob.toISOString(),
      })
      .then(function () {
        agent
          .post("/userDetails")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
