const INFO = {
    main: {
        title: "whosaheb",
        name: "Saheb Das",
        email: "whosaheb@gmail.com",
        logo: "assets/logo.png",
    },

    socials: {
        x: "https://x.com/whosaheb",
        github: "https://github.com/whosaheb",
        linkedin: "https://linkedin.com/whosaheb",
        instagram: "https://instagram.com/",
        stackoverflow: "https://stackoverflow.com/",
        facebook: "https://www.facebook.com/sdas011996",
        email: "mailto:whosaheb@gmail.com",
    },

    homepage: {
      title: "Programmer, Backend Engineer & Integration Specialist",
      description: `
        <p>
            I’m <strong>Saheb Das</strong> — a passionate backend engineer who loves building reliable systems and solving real-world problems.
            My journey began with curiosity about how things work, and that curiosity became a career: from software testing to designing
            production-grade Node.js services and operating my own home lab to prototype infrastructure ideas.
        </p>
        <p>
            I care deeply about clean, secure, and maintainable code. I enjoy tackling performance, reliability and integration challenges,
            and I take pride in shipping features that customers can trust.
        </p>
        <p>
            Outside work I recharge by riding my bike on weekends, exploring new tools on my laptop, and experimenting with home servers —
            whether it’s spinning up VMs, testing CI/CD flows, or running lightweight database instances for isolated testing.
        </p>
        <p>
            If you're looking for a dependable backend specialist who combines practical engineering with a curious, hands-on approach,
            let’s connect.
        </p>`
    },
    about: {
      title: "Senior Node.js Developer & Tech Lead — Practical, Curious, Hands-On",
      description: `
        <h3>Biography</h3>
        <p>
            I come from a Bengali Indian family in Midnapore, West Bengal. I have completed B.Sc. and M.Sc. in Computer Science (M.Sc. 2018, B.Sc. 2016). As a student I was never the
            front-bench superstar; I was the questioner — always asking why and how — which shaped my problem-solving mindset.
        </p><br/>
        <h3>Career journey</h3>
        <p>
            I started professionally as a Software Test Engineer, which taught me the value of quality and thorough testing. I later transitioned
            to development and found my calling in backend engineering. Since 2019 I have worked consistently with Node.js building REST and
            GraphQL services. I also worked with PHP (2021) and built Python/Flask apps early in my career. I initially worked full-stack (MERN)
            and then focused deeply on backend systems, integrations and platform reliability.
        </p><br/>
        <h3>Skills & focus</h3>
        <p>I specialize in designing and building robust backend systems with an emphasis on security and production-readiness:</p>
        <ul>
            <li><strong>Languages & Runtimes:</strong> Node.js, TypeScript, JavaScript, Python, PHP</li>
            <li><strong>Frameworks & APIs:</strong> Express.js, NestJS, GraphQL (Apollo), REST</li>
            <li><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB</li>
            <li><strong>Cloud & DevOps:</strong> AWS (EC2, S3, RDS), Docker, DigitalOcean, Jenkins CI/CD</li>
            <li><strong>Other Tools:</strong> TypeORM, Sequelize, Mongoose, Socket.io, observability & testing (Jest/Vitest, New Relic)</li>
            <li><strong>Focus areas:</strong> API design, performance tuning, security (vulnerabilities, SQL injection mitigation, rate limiting), and operational resilience</li>
        </ul><br/>
        <h3>Home lab & continuous learning</h3>
        <p>
            To close the gaps I felt during score-based education, I built a home server lab where I experiment with practical infrastructure:
        </p>
        <ul>
            <li>VMs for isolated deployments and testing</li>
            <li>CI/CD integrations and automated pipelines</li>
            <li>RDS-like database instances for individual test environments</li>
            <li>Container services for reproducible deployments</li>
            <li>NAS for shared, online storage and backups</li>
        </ul><br/>
        <h3>Who I am today</h3>
        <p>
            I consider myself a pragmatic computer programmer who cares about quality, clarity and impact. I enjoy mentoring, collaborating with
            teams, and contributing to open source whenever possible. I'm open to freelance projects and full-time roles where I can help design,
            build and scale backend systems that real people rely on.
        </p>`
    },
    articles: {
      title: "Notes from the Backend: Architecture, DevOps & Practical Engineering",
      description: `
        <p>
            A chronological collection of practical posts and long-form thoughts on building real systems.
            Expect pieces about:
        </p>
        <ul>
            <li>
                <strong>Transitioning from QA to development</strong> — lessons learned about testing,
                observability and reliability.
            </li>
            <li>
                <strong>Node.js best practices</strong> — error handling, performance tuning, and real-world
                patterns I use in production.
            </li>
            <li>
                <strong>Backend architecture</strong> — designing APIs, microservices trade-offs, and when to
                choose one pattern over another.
            </li>
            <li>
                <strong>DevOps & home lab experiments</strong> — CI/CD, container strategies, lightweight RDS
                setups for testing, and infrastructure prototyping.
            </li>
            <li>
                <strong>Security in production</strong> — common vulnerabilities, rate limiting, and defensive
                design.
            </li>
        </ul>
        <p>
            These articles are written for hiring teams, engineering leads and fellow developers who want
            actionable advice — not theory. If a topic would help your team, I’m happy to collaborate or
            expand an article into a technical workshop.
        </p>`
    },

    projects: [
        {
            "title": "Gamestrademarket",
            "description": "Led backend development for Gamestrademarket, a real-time e-commerce platform for trading game assets. Built the system with Node.js/Express, integrating live updates via Socket.io and deploying on AWS for scalable performance.",
            "logo": "assets/nodejs-logo.png",
            "company": "Capital Numbers Limited"
        },
        {
            "title": "Haus",
            "description": "Built and optimized backend services for Haus using Node.js/Express and TypeScript, enhancing performance and reliability. Applied critical bug fixes and improved data flow to ensure a smoother user experience.",
            "logo": "assets/typescript-logo.png",
            "company": "Capital Numbers Limited",
        },
        {
            "title": "Hrqualifier",
            "description": "Developed the backend for hrqualifier.com, a resource management app, using NestJS and GraphQL on AWS. Architected scalable solutions with TypeORM and implemented Jenkins CI/CD pipelines for efficient deployment.",
            "logo": "assets/nestjs-logo.png",
            "company": "Techno Exponent(T-web) private limited"
        },
        {
            "title": "HANA Waters",
            "description": "Led backend development for the HANA Waters e-commerce platform using Node.js/Express and Sequelize. Integrated payment gateways and cron jobs to automate key business processes.",
            "logo": "assets/javascript-logo.png",
            "company": "Techno Exponent(T-web) private limited"
        },
        {
            "title": "CricketAPI / Crex Project",
            "description": "Developed CricketAPI (Crex), a high-performance REST API for a mobile gaming app, using Node.js/Express and MongoDB. Implemented scheduled updates with cron jobs for timely data processing.",
            "logo": "assets/nodejs-logo.png",
            "company": "Havfly Services Pvt. Ltd."
        },
        {
            "title": "Trainpetdog",
            "description": "Maintained a PHP-based web application for pet training services, adding features like A/B testing and subscription models. Managed deployment on AWS using Jenkins for continuous integration.",
            "logo": "assets/php-logo.png",
            "company": "SERSCOPL Pvt. Ltd."
        },
        {
            "title": "K9TI",
            "description": "Worked on the K9TI PHP portal for dog training, developing new features and ensuring smooth AWS-based deployment. Enhanced platform functionality and reliability through continuous improvements.",
            "logo": "assets/php-logo.png",
            "company": "SERSCOPL Pvt. Ltd."
        },
        {
            "title": "dreamwings.in",
            "description": "Developed DreamWings, a travel-themed mobile app, using the MERN stack. Handled end-to-end development with Node.js and React, deploying the app on AWS and DigitalOcean.",
            "logo": "assets/nodejs-logo.png",
            "company": "Freelancing Project"
        },
        {
            "title": "ananyafashion.com",
            "description": "Built Ananya Fashion, an e-commerce website, with the MERN stack (Node.js and React). Managed full-stack development and deployed the application on AWS and DigitalOcean for high availability.",
            "logo": "assets/javascript-logo.png",
            "company": "Freelancing Project"
        },
        {
            "title": "Edbyss",
            "description": "Engineered the backend for Edbyss, an online education mobile app, using Node.js/Express, Sequelize, and MySQL. Deployed the REST API on AWS EC2 to ensure reliable performance.",
            "logo": "assets/nodejs-logo.png",
            "company": "Freelancing Project"
        },
        {
            "title": "Hyundai Revamp",
            "description": "Performed quality assurance for the Hyundai Revamp project, an intranet portal upgrade. Conducted thorough testing to ensure a smooth and reliable release for the automotive client.",
            "logo": "assets/testing-logo.png",
            "company": "Infoaxon Technology Pvt. Ltd."
        },
        {
            "title": "Maruti Pitstop",
            "description": "Conducted QA for the Maruti Pitstop intranet portal project, validating features and performance. Ensured the automotive client's internal tools were reliable and fully functional.",
            "logo": "assets/testing-logo.png",
            "company": "Infoaxon Technology Pvt. Ltd."
        },
        {
            "title": "Edelfin PING-2.0",
            "description": "Managed comprehensive QA testing for Edelfin PING-2.0, an insurance management platform. Verified functionality and performance to maintain high-quality standards for the software.",
            "logo": "assets/testing-logo.png",
            "company": "Infoaxon Technology Pvt. Ltd."
        }
    ],

    articles_content: [
        {
            title: "Barta — An Enterprise-Grade Chat Application Without Redis, Docker, or S3</h2>",
            date: "2025-10-19",
            summary: "“Barta” is a full-stack enterprise chat app built with NestJS, React, and MongoDB — without Redis, Docker, or S3. It showcases how clean architecture, WebSockets, and Nextcloud integration can power a real-time, scalable communication platform entirely under developer control.",
            description: `
                <p>
                    When I started building <strong>Barta</strong>, my goal was simple but ambitious — create an enterprise-level, real-time chat platform inspired by WhatsApp Web, but with one rule:
                </p>
                <blockquote>
                    “No Redis, no Docker, no S3 — just clean architecture and core Node.js engineering.”
                </blockquote>
                <p>
                    This constraint forced me to focus on fundamentals — scalability through code structure, not tools.
                    Barta became not just a chat app, but a full-stack learning journey in <strong>NestJS</strong>, <strong>React.js</strong>,
                    <strong>MongoDB</strong>, and <strong>WebSocket-based realtime communication</strong>.
                </p><br/><br/>
                <h3>🏗️ Architecture & Core Design</h3><br/>
                <pre><code>
                [ React.js (Frontend) ]  <-->  [ NestJS (Backend) ]
                                        \\       |
                                            \\      | WebSocket (Socket.IO)
                                            \\     |
                                            \\-> [ MongoDB (Mongoose) ]
                </code></pre>
                <p>
                    Media and file storage is decoupled — instead of local storage or cloud buckets, Barta uses
                    <strong>Nextcloud</strong> (hosted on my <strong>TrueNAS</strong> server) via <strong>WebDAV API</strong>.
                    When a user uploads a file, it goes through the backend proxy, which sends it to Nextcloud,
                    retrieves a share link, and stores only the URL in MongoDB.
                </p><br/><br/>
                <h3>⚙️ Backend: NestJS REST + Socket.IO</h3><br/>
                <p>
                    The backend is built using <strong>NestJS</strong>, a framework that aligns perfectly with enterprise-grade modularity.
                    Each module (Auth, Chat, Users, Files) is isolated but interacts via dependency injection and service abstraction.
                </p>
                <pre><code class="language-typescript">
                @WebSocketGateway({ cors: true })
                export class ChatGateway {
                constructor(private readonly chatService: ChatService) {}

                @SubscribeMessage('send_message')
                async handleMessage(@MessageBody() data: SendMessageDto) {
                    const savedMessage = await this.chatService.saveMessage(data);
                    this.server.emit('receive_message', savedMessage);
                }

                @SubscribeMessage('typing')
                handleTyping(@MessageBody() data: TypingDto) {
                    this.server.emit('user_typing', data);
                }
                }
                </code></pre>
                <p>
                    This structure enables <strong>real-time messaging</strong>, <strong>typing indicators</strong>,
                    <strong>presence updates</strong>, and <strong>WebRTC signaling</strong> for voice/video calls.
                </p><br/><br/>
                <h3>📡 REST API Example</h3><br/>
                <p>
                    All CRUD and non-realtime operations are handled via standard NestJS REST endpoints.
                    I followed OpenAPI-driven design using NestJS decorators, automatically generating Swagger docs.
                </p>

                <pre><code class="language-typescript">
                @ApiTags('users')
                @Controller('users')
                export class UsersController {
                constructor(private readonly usersService: UsersService) {}

                @Get(':id')
                @ApiOperation({ summary: 'Get user by ID' })
                async findById(@Param('id') id: string) {
                    return this.usersService.findOne(id);
                }

                @Post('search')
                @ApiOperation({ summary: 'Search users by name' })
                async search(@Body('query') query: string) {
                    return this.usersService.search(query);
                }
                }
                </code></pre>
                <p>
                    All APIs are stateless and secured using <strong>JWT tokens</strong>.
                    Since Redis wasn’t allowed for session invalidation, I implemented short-lived access tokens
                    combined with MongoDB-based refresh token rotation.
                </p><br/><br/>
                <h3>☁️ File Handling with Nextcloud</h3><br/>
                <p>
                    File uploads go from <strong>Next.js → NestJS → Nextcloud WebDAV → MongoDB (URL)</strong>.
                </p>
                <pre><code class="language-typescript">
                @Injectable()
                export class FileService {
                async uploadToNextcloud(file: Express.Multer.File) {
                    const uploadUrl = \`\${process.env.NEXTCLOUD_BASE_URL}/remote.php/webdav/\${file.originalname}\`;

                    await axios.put(uploadUrl, file.buffer, {
                    auth: {
                        username: process.env.NEXTCLOUD_USER,
                        password: process.env.NEXTCLOUD_PASS,
                    },
                    headers: { 'Content-Type': file.mimetype },
                    });

                    const shareLink = await this.getShareLink(file.originalname);
                    return { name: file.originalname, url: shareLink };
                }

                private async getShareLink(filename: string): Promise<string> {
                    const response = await axios.post(
                    \`\${process.env.NEXTCLOUD_BASE_URL}/ocs/v2.php/apps/files_sharing/api/v1/shares\`,
                    { path: filename, shareType: 3 },
                    {
                        headers: { 'OCS-APIRequest': 'true' },
                        auth: {
                        username: process.env.NEXTCLOUD_USER,
                        password: process.env.NEXTCLOUD_PASS,
                        },
                    }
                    );

                    return response.data.ocs.data.url;
                }
                }
                </code></pre>
                <p>
                    This ensures full file security and externalized storage — no large payloads on the main server.
                </p><br/><br/>
                <h3>🔒 Authentication & Authorization</h3><br/>

                <pre><code class="language-typescript">
                const accessToken = this.jwtService.sign(
                { sub: user._id, role: user.role },
                { expiresIn: '15m' }
                );
                const refreshToken = this.jwtService.sign(
                { sub: user._id },
                { expiresIn: '7d' }
                );
                </code></pre>
                <p>
                    Every protected route uses a custom <code>JwtAuthGuard</code>, ensuring lightweight validation per request.
                </p><br/><br/>
                <h3>🧩 Testing & Quality</h3><br/>
                <p>
                    Both frontend and backend include <strong>test coverage</strong> — Jest for backend, Vitest for frontend.
                </p>
                <pre><code class="language-typescript">
                describe('ChatService', () => {
                let service: ChatService;

                beforeEach(async () => {
                    const module = await Test.createTestingModule({
                    providers: [ChatService],
                    }).compile();
                    service = module.get<ChatService>(ChatService);
                });

                it('should create message', async () => {
                    const result = await service.saveMessage({ text: 'Hello', sender: 'user1' });
                    expect(result.text).toBe('Hello');
                });
                });
                </code></pre><br/><br/>
                <h3>🌍 What I Learned</h3><br/>
                <p>
                    Building Barta reminded me that you can reach enterprise quality without relying on every trendy DevOps tool.
                    It’s all about clean architecture, layered abstraction, and respecting separation of concerns.
                </p>
                <blockquote>
                    Redis, Docker, and S3 are great tools — but understanding how to build without them strengthens your fundamentals.
                </blockquote>
                <p>
                    I also realized how valuable it is to own your infrastructure. Running Nextcloud on TrueNAS gave me full control
                    over storage, scalability, and network visibility.
                </p><br/><br/>
                <h3>🚀 Closing Thoughts</h3><br/>
                <p>
                    <strong>Barta</strong> isn’t just a chat app — it’s a reflection of my philosophy as a developer:
                </p>
                <ul>
                    <li>Build systems that are transparent and maintainable.</li>
                    <li>Understand every layer — from API to storage.</li>
                    <li>Solve constraints through design, not dependencies.</li>
                </ul>
                <p>
                    I’m planning to open-source Barta in the future, documenting more on real-time performance and WebRTC optimization.
                    If you’re interested in collaboration or want to explore similar backend architectures — let’s connect!
                </p>
                `,
            link: "https://chat.whosaheb.in"
        }
    ]
};