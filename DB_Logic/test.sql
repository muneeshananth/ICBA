CREATE SCHEMA icba;

CREATE  TABLE icba.attendance_status ( 
	id                   INT UNSIGNED NOT NULL   AUTO_INCREMENT  PRIMARY KEY,
	`status`             VARCHAR(50)  NOT NULL     
 ) ENGINE=InnoDB AUTO_INCREMENT=201 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE  TABLE icba.courses ( 
	id                   INT UNSIGNED NOT NULL   AUTO_INCREMENT  PRIMARY KEY,
	course_id            VARCHAR(50)  NOT NULL     ,
	course_name          VARCHAR(100)       ,
	CONSTRAINT unq_course_table_course_id UNIQUE ( course_id ) 
 ) ENGINE=InnoDB AUTO_INCREMENT=2098 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE  TABLE icba.role ( 
	id                   INT UNSIGNED NOT NULL   AUTO_INCREMENT  PRIMARY KEY,
	role                 VARCHAR(100)  NOT NULL     ,
	CONSTRAINT unq_role_role UNIQUE ( role ) 
 ) ENGINE=InnoDB AUTO_INCREMENT=531 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE  TABLE icba.student_details ( 
	id                   INT UNSIGNED NOT NULL   AUTO_INCREMENT  PRIMARY KEY,
	icba_id              VARCHAR(50)       ,
	name                 VARCHAR(100)  NOT NULL     ,
	email                VARCHAR(100)       ,
	phone                VARCHAR(50)  NOT NULL     ,
	course_id            VARCHAR(100)       ,
	`DOB`                VARCHAR(100)  NOT NULL     ,
	`createdAt`          DATETIME  NOT NULL DEFAULT (CURRENT_TIMESTAMP)    ,
	`updatedAt`          DATETIME  NOT NULL DEFAULT (CURRENT_TIMESTAMP)    ,
	CONSTRAINT unq_student_details_phone UNIQUE ( phone ) ,
	CONSTRAINT unq_student_details_icba_id UNIQUE ( icba_id ) 
 ) ENGINE=InnoDB AUTO_INCREMENT=836 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE INDEX course_id ON icba.student_details ( course_id );

CREATE  TABLE icba.subjects ( 
	id                   INT UNSIGNED NOT NULL   AUTO_INCREMENT  PRIMARY KEY,
	subject_id           VARCHAR(50)  NOT NULL     ,
	subject_name         VARCHAR(100)       ,
	CONSTRAINT unq_subjects_subject_id UNIQUE ( subject_id ) 
 ) ENGINE=InnoDB AUTO_INCREMENT=531 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE  TABLE icba.authentication_table ( 
	id                   INT UNSIGNED NOT NULL   AUTO_INCREMENT  PRIMARY KEY,
	icba_id              VARCHAR(100)  NOT NULL     ,
	password             VARCHAR(100)  NOT NULL     ,
	role                 VARCHAR(100)  NOT NULL     ,
	phone                VARCHAR(50)  NOT NULL     ,
	`createdAt`          DATETIME  NOT NULL DEFAULT (CURRENT_TIMESTAMP)    ,
	`updatedAt`          DATETIME  NOT NULL DEFAULT (CURRENT_TIMESTAMP)    
 ) ENGINE=InnoDB AUTO_INCREMENT=226 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE INDEX fk_authentication_table_role ON icba.authentication_table ( role );

CREATE INDEX fk_authentication_table ON icba.authentication_table ( icba_id );

CREATE INDEX fk_authentication_table_phone ON icba.authentication_table ( phone );

CREATE  TABLE icba.course_subject ( 
	id                   INT UNSIGNED NOT NULL   AUTO_INCREMENT  PRIMARY KEY,
	course_id            VARCHAR(100)  NOT NULL     ,
	subject_id           VARCHAR(100)  NOT NULL     
 ) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE INDEX fk_course_subject_courses ON icba.course_subject ( subject_id );

CREATE INDEX fk_course_subject ON icba.course_subject ( course_id );

CREATE  TABLE icba.student_attendance ( 
	id                   INT UNSIGNED NOT NULL   AUTO_INCREMENT  PRIMARY KEY,
	`date`               DATE  NOT NULL     ,
	icba_id              VARCHAR(100)    CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci   ,
	attendance_status    INT UNSIGNED NOT NULL     
 ) ENGINE=InnoDB AUTO_INCREMENT=226 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE INDEX fk_student_attendance_status ON icba.student_attendance ( attendance_status );

CREATE INDEX fk_student_attendance_details ON icba.student_attendance ( icba_id );

ALTER TABLE icba.authentication_table ADD CONSTRAINT fk_authentication_table FOREIGN KEY ( icba_id ) REFERENCES icba.student_details( icba_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE icba.authentication_table ADD CONSTRAINT fk_authentication_table_phone FOREIGN KEY ( phone ) REFERENCES icba.student_details( phone ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE icba.authentication_table ADD CONSTRAINT fk_authentication_table_role FOREIGN KEY ( role ) REFERENCES icba.role( role ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE icba.course_subject ADD CONSTRAINT fk_course_subject FOREIGN KEY ( course_id ) REFERENCES icba.courses( course_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE icba.course_subject ADD CONSTRAINT fk_course_subject_courses FOREIGN KEY ( subject_id ) REFERENCES icba.subjects( subject_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE icba.student_attendance ADD CONSTRAINT fk_student_attendance FOREIGN KEY ( icba_id ) REFERENCES icba.student_details( icba_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE icba.student_attendance ADD CONSTRAINT fk_student_attendance_details FOREIGN KEY ( icba_id ) REFERENCES icba.student_details( icba_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE icba.student_attendance ADD CONSTRAINT fk_student_attendance_status FOREIGN KEY ( attendance_status ) REFERENCES icba.attendance_status( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE icba.student_details ADD CONSTRAINT course_id FOREIGN KEY ( course_id ) REFERENCES icba.courses( course_id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

