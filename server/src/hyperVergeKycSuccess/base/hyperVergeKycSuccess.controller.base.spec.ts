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
import { HyperVergeKycSuccessController } from "../hyperVergeKycSuccess.controller";
import { HyperVergeKycSuccessService } from "../hyperVergeKycSuccess.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  aadhaarNumber: 42,
  aadhaarDob: new Date(),
  panNumber: "examplePanNumber",
  panDob: new Date(),
  customerId: 42,
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  mobileNumber: 42,
};
const CREATE_RESULT = {
  aadhaarNumber: 42,
  aadhaarDob: new Date(),
  panNumber: "examplePanNumber",
  panDob: new Date(),
  customerId: 42,
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  mobileNumber: 42,
};
const FIND_MANY_RESULT = [
  {
    aadhaarNumber: 42,
    aadhaarDob: new Date(),
    panNumber: "examplePanNumber",
    panDob: new Date(),
    customerId: 42,
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    mobileNumber: 42,
  },
];
const FIND_ONE_RESULT = {
  aadhaarNumber: 42,
  aadhaarDob: new Date(),
  panNumber: "examplePanNumber",
  panDob: new Date(),
  customerId: 42,
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  mobileNumber: 42,
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

describe("HyperVergeKycSuccess", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: HyperVergeKycSuccessService,
          useValue: service,
        },
      ],
      controllers: [HyperVergeKycSuccessController],
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

  test("POST /hyperVergeKycSuccesses", async () => {
    await request(app.getHttpServer())
      .post("/hyperVergeKycSuccesses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        aadhaarDob: CREATE_RESULT.aadhaarDob.toISOString(),
        panDob: CREATE_RESULT.panDob.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /hyperVergeKycSuccesses", async () => {
    await request(app.getHttpServer())
      .get("/hyperVergeKycSuccesses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          aadhaarDob: FIND_MANY_RESULT[0].aadhaarDob.toISOString(),
          panDob: FIND_MANY_RESULT[0].panDob.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /hyperVergeKycSuccesses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/hyperVergeKycSuccesses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /hyperVergeKycSuccesses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/hyperVergeKycSuccesses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        aadhaarDob: FIND_ONE_RESULT.aadhaarDob.toISOString(),
        panDob: FIND_ONE_RESULT.panDob.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /hyperVergeKycSuccesses existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/hyperVergeKycSuccesses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        aadhaarDob: CREATE_RESULT.aadhaarDob.toISOString(),
        panDob: CREATE_RESULT.panDob.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/hyperVergeKycSuccesses")
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
