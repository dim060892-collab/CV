#!/usr/bin/env python3
"""Generate an English CV PDF from the resume content."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT, TA_JUSTIFY
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table,
    TableStyle, Image, HRFlowable, KeepTogether,
)
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet

ACCENT = HexColor("#E8482B")
DARK = HexColor("#1a1a1a")
GREY = HexColor("#555555")
LIGHT = HexColor("#888888")
CHIP_BG = HexColor("#f2efed")

OUT = "Igor_Goriainov_CV.pdf"
PORTRAIT = "media/portrait-avatar.jpg"

styles = getSampleStyleSheet()

S = {
    "name": ParagraphStyle("name", parent=styles["Normal"], fontName="Helvetica-Bold",
                           fontSize=22, leading=25, textColor=DARK),
    "role": ParagraphStyle("role", parent=styles["Normal"], fontName="Helvetica",
                           fontSize=11, leading=14, textColor=ACCENT, spaceBefore=2),
    "tagline": ParagraphStyle("tagline", parent=styles["Normal"], fontName="Helvetica-Oblique",
                           fontSize=9.5, leading=13, textColor=GREY, spaceBefore=4),
    "contact": ParagraphStyle("contact", parent=styles["Normal"], fontName="Helvetica",
                           fontSize=8.5, leading=13, textColor=GREY),
    "section": ParagraphStyle("section", parent=styles["Normal"], fontName="Helvetica-Bold",
                           fontSize=11.5, leading=14, textColor=ACCENT, spaceBefore=12, spaceAfter=4),
    "about": ParagraphStyle("about", parent=styles["Normal"], fontName="Helvetica",
                           fontSize=9.5, leading=14, textColor=DARK, alignment=TA_JUSTIFY),
    "jobtitle": ParagraphStyle("jobtitle", parent=styles["Normal"], fontName="Helvetica-Bold",
                           fontSize=10.5, leading=13, textColor=DARK),
    "jobmeta": ParagraphStyle("jobmeta", parent=styles["Normal"], fontName="Helvetica",
                           fontSize=8.5, leading=12, textColor=LIGHT),
    "summary": ParagraphStyle("summary", parent=styles["Normal"], fontName="Helvetica-Oblique",
                           fontSize=9, leading=13, textColor=GREY, spaceBefore=2, spaceAfter=3),
    "bullet": ParagraphStyle("bullet", parent=styles["Normal"], fontName="Helvetica",
                           fontSize=9, leading=12.5, textColor=DARK, leftIndent=10,
                           bulletIndent=0, spaceBefore=1, alignment=TA_JUSTIFY),
    "subhead": ParagraphStyle("subhead", parent=styles["Normal"], fontName="Helvetica-Bold",
                           fontSize=9, leading=12, textColor=GREY, spaceBefore=3),
    "skillgroup": ParagraphStyle("skillgroup", parent=styles["Normal"], fontName="Helvetica-Bold",
                           fontSize=9, leading=12, textColor=DARK),
    "skillitems": ParagraphStyle("skillitems", parent=styles["Normal"], fontName="Helvetica",
                           fontSize=9, leading=13, textColor=GREY),
    "edu": ParagraphStyle("edu", parent=styles["Normal"], fontName="Helvetica",
                           fontSize=9, leading=12.5, textColor=DARK),
}


def section(title):
    return [Paragraph(title.upper(), S["section"]),
            HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=4, spaceBefore=0)]


def job(role, company, location, period, summary, highlights, skills):
    flow = []
    meta = Table(
        [[Paragraph(f"{role} — <font color='#E8482B'>{company}</font>", S["jobtitle"]),
          Paragraph(period, S["jobmeta"])]],
        colWidths=[120 * mm, 50 * mm],
    )
    meta.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ALIGN", (1, 0), (1, 0), "RIGHT"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    flow.append(meta)
    flow.append(Paragraph(location, S["jobmeta"]))
    flow.append(Paragraph(summary, S["summary"]))
    for h in highlights:
        if "group" in h:
            flow.append(Paragraph(h["group"], S["subhead"]))
        else:
            txt = h["text"]
            if h.get("key"):
                txt = f"<b>{txt}</b>"
            flow.append(Paragraph(f"• {txt}", S["bullet"]))
    if skills:
        flow.append(Spacer(1, 2))
        flow.append(Paragraph("<font color='#888888'>Stack:</font> " + " · ".join(skills),
                              ParagraphStyle("st", parent=S["skillitems"], fontSize=8, textColor=GREY)))
    flow.append(Spacer(1, 8))
    return flow


# ---- Content (English) -------------------------------------------------------

NAME = "Igor Goriainov"
ROLE = "Senior Robotics Engineer / Head of Software Engineering"
TAGLINE = "7+ years in robotics: from drones to therapeutic robots"
LOCATION = "Moscow, Russia"
CONTACT = [
    'Email: <a href="mailto:likeiigor@gmail.com"><font color="#1a1a1a">likeiigor@gmail.com</font></a>',
    'Telegram: <a href="https://t.me/copter_igor"><font color="#1a1a1a">@copter_igor</font></a>',
    'LinkedIn: <a href="https://www.linkedin.com/in/igor-goriainov/"><font color="#1a1a1a">in/igor-goriainov</font></a>',
    'Web: <a href="https://igoriainov.tech"><font color="#1a1a1a">igoriainov.tech</font></a>',
]

ABOUT = ("Software engineer with experience in developing and integrating robotic systems. "
         "My path spans developing and deploying complex R&D solutions into stable products, "
         "through to leading a development team. Worked on projects in UAVs, mobile robotics, "
         "manipulators, and complex robotic systems.")

EXPERIENCE = [
    dict(
        role="Head of Software Engineering", company="roboSculptor", location="UAE",
        period="Jul 2025 – present",
        summary="Leading the software department (11 people) for a robotic complex for personalized "
                "muscle recovery and body contouring.",
        highlights=[
            {"group": "Responsibilities:"},
            {"text": "Management: building and running development processes and release policy, task-setting, mentoring."},
            {"text": "Turning R&D into a stable customer product: process standardization, CI/CD adoption, release management and deployment to production robots.", "key": True},
            {"text": "Systems analysis: designing and evolving the software architecture, defining functional and non-functional requirements, optimizing cloud infrastructure (AWS)."},
            {"text": "Orchestrating all engineering domains into one system: computer vision & ML, robotics, backend, DevOps and frontend."},
            {"group": "What else I did:"},
            {"text": "Set up workflows between product, business, support and engineering."},
            {"text": "Integrated a full automated-testing loop."},
            {"text": "Optimized the team by replacing two roles with AI agents.", "key": True},
        ],
        skills=["Team leadership", "System design", "Systems analysis", "CI/CD", "Release management", "AWS", "Mentoring", "AI agents"],
    ),
    dict(
        role="Robotics Software Engineer", company="roboSculptor", location="UAE",
        period="Mar 2023 – Jul 2025 · 2 yr 5 mo",
        summary="Development of the control system for a complex comprising a robotic manipulator, "
                "a linear drive, and numerous pneumatic and automation elements.",
        highlights=[
            {"text": "Designed and implemented the software architecture for the entire robotic complex on top of MQTT topics: full documentation, dependency mapping, split into independent functional modules, API and base classes.", "key": True},
            {"text": "Wrote path-planning and trajectory-generation modules for Han's and AUBO robots."},
            {"text": "Integrated and deployed the system software with Docker Compose."},
            {"text": "Implemented force-control algorithms and real-time motion-trajectory correction."},
            {"text": "Built the safety system and subsystem monitoring modules; integrated Zabbix monitoring."},
            {"text": "Mentored junior developers (a Flask-based testing service and control algorithms)."},
            {"text": "Developed device drivers (supporting MODBUS, UART, RS-485 and others).", "key": True},
            {"text": "Developed a simulation model of the complex in PyBullet, with collision modelling and detection."},
            {"text": "Deployed and administered the corporate GitLab."},
        ],
        skills=["Python", "ROS", "MQTT", "PyBullet", "Docker Compose", "Modbus", "Motion planning", "Force control"],
    ),
    dict(
        role="CTO / Co-founder", company="V Teme (fashion-tech)", location="Moscow",
        period="Apr 2022 – Dec 2022",
        summary="Fashion-tech startup: recommendation engine and AI try-on for a marketplace. Passed 3 accelerators.",
        highlights=[
            {"text": "Project management."},
            {"text": "Project promotion, investment and grant applications."},
            {"text": "R&D of the recommendation and virtual try-on tech."},
        ],
        skills=["Python", "Pandas", "NumPy", "PyTorch", "OpenCV", "telebot", "Figma", "Product"],
    ),
]

PROJECTS = [
    ("Humanoid G1 on a Zoom call: a live AI agent in Isaac Sim", "2026",
     "A Unitree G1 humanoid in Isaac Sim holds a live voice conversation over Zoom. Real-time STT→LLM→TTS "
     "pipeline; two blended neural policies (ProtoMotions, ASAP) drive the robot at 50 Hz, streamed back over "
     "WebRTC with < 3 s end-to-end latency.",
     "Isaac Sim · Isaac Lab · ProtoMotions · ASAP · RL · LLM · WebRTC · OpenUSD"),
    ("Autonomous Vehicle Control via Behavioral Cloning", "2023",
     "Bachelor's thesis: autonomous driving via behavioral cloning. Combined YOLO detection and segmentation "
     "with a CNN replicating expert driving, plus an MPC controller. Validated in CARLA.",
     "PyTorch · YOLO · U-Net · OpenCV · CNN · CARLA · MPC"),
    ("Quantoriada 2020 — courier convertoplane", "2020",
     "A convertoplane delivering medical samples: connected to a cellular network, receiving flight points; "
     "controlled via a VK bot by geolocation.",
     "PX4 · MavROS · ROS · Python"),
    ("CopterHack 2019 — graffiti drone", "2019",
     "A drone reproduces a user's drawing with an RGB matrix; the image appears via long-exposure (freeze light).",
     "ArduPilot · ROS · Python · C++"),
]

SKILLS = [
    ("Programming", "Python, C++"),
    ("Robotics & control", "ROS2, MQTT, Motion / Path planning, Manipulation, MoveIt, ProtoMotion, "
                           "Force-torque control, PX4, ArduPilot, MavROS, Modbus, UART / RS-485, Control Theory, UAV"),
    ("ML & CV", "PyTorch, OpenCV, YOLO, Roboflow, Pandas"),
    ("Simulators & tools", "PyBullet, Isaac Sim, Isaac Lab, MATLAB, Autodesk Inventor, 3D printing"),
    ("Infra & DevOps", "Docker, Docker Compose, GitLab CI/CD, AWS, Zabbix, Prometheus, Grafana, Proxmox, Linux, Git"),
    ("Web", "HTML, CSS, Django, Flask"),
]

EDUCATION = [
    ("Master's — Informatics & Control Systems", "Bauman Moscow State Technical University", "2023 – 2025"),
    ("Bachelor's — Informatics & Control Systems", "Bauman Moscow State Technical University", "2019 – 2023"),
]

COURSES = [
    "Web Developer retraining — Bauman MSTU, 2023",
    "Neural networks & computer vision — Samsung, 2022",
    "Neural networks — Bioinformatics Institute, 2022",
    "Intro to ROS — LETI, 2020",
]

LANGUAGES = [("Russian", "Native"), ("English", "B2 — upper-intermediate")]


# ---- Build -------------------------------------------------------------------

def build():
    doc = BaseDocTemplate(OUT, pagesize=A4,
                          leftMargin=16 * mm, rightMargin=16 * mm,
                          topMargin=14 * mm, bottomMargin=14 * mm)
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
    doc.addPageTemplates([PageTemplate(id="all", frames=[frame])])

    story = []

    # Header: photo + name/role/contact
    name_block = [
        Paragraph(NAME, S["name"]),
        Paragraph(ROLE, S["role"]),
        Paragraph(TAGLINE, S["tagline"]),
        Spacer(1, 4),
        Paragraph(f"{LOCATION} &nbsp;•&nbsp; " + " &nbsp;•&nbsp; ".join(CONTACT[:2]), S["contact"]),
        Paragraph(" &nbsp;•&nbsp; ".join(CONTACT[2:]), S["contact"]),
    ]
    try:
        img = Image(PORTRAIT, width=26 * mm, height=26 * mm)
        header = Table([[name_block, img]], colWidths=[148 * mm, 26 * mm])
    except Exception:
        header = Table([[name_block]], colWidths=[174 * mm])
    header.setStyle(TableStyle([
        ("VALIGN", (0, 0), (0, 0), "TOP"),
        ("VALIGN", (1, 0), (1, 0), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(header)
    story.append(Spacer(1, 6))

    story += section("Profile")
    story.append(Paragraph(ABOUT, S["about"]))

    story += section("Experience")
    for e in EXPERIENCE:
        story += job(e["role"], e["company"], e["location"], e["period"],
                     e["summary"], e["highlights"], e["skills"])

    story += section("Selected Projects")
    for title, period, desc, stack in PROJECTS:
        block = [
            Table([[Paragraph(f"<b>{title}</b>", S["edu"]), Paragraph(period, S["jobmeta"])]],
                  colWidths=[150 * mm, 24 * mm],
                  style=TableStyle([
                      ("VALIGN", (0, 0), (-1, -1), "TOP"),
                      ("ALIGN", (1, 0), (1, 0), "RIGHT"),
                      ("LEFTPADDING", (0, 0), (-1, -1), 0),
                      ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                      ("TOPPADDING", (0, 0), (-1, -1), 0),
                      ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                  ])),
            Paragraph(desc, ParagraphStyle("pd", parent=S["bullet"], leftIndent=0)),
            Paragraph(f"<font color='#888888'>{stack}</font>",
                      ParagraphStyle("ps", parent=S["skillitems"], fontSize=8)),
            Spacer(1, 6),
        ]
        story.append(KeepTogether(block))

    story += section("Skills")
    rows = [[Paragraph(g, S["skillgroup"]), Paragraph(items, S["skillitems"])] for g, items in SKILLS]
    skills_table = Table(rows, colWidths=[40 * mm, 134 * mm])
    skills_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))
    story.append(skills_table)

    story += section("Education")
    for degree, org, period in EDUCATION:
        story.append(Table(
            [[Paragraph(f"<b>{degree}</b><br/><font color='#555555'>{org}</font>", S["edu"]),
              Paragraph(period, S["jobmeta"])]],
            colWidths=[150 * mm, 24 * mm],
            style=TableStyle([
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("ALIGN", (1, 0), (1, 0), "RIGHT"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 1),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
            ])))
    story.append(Spacer(1, 2))
    story.append(Paragraph("<b>Extra courses:</b> " + "; ".join(COURSES),
                           ParagraphStyle("cc", parent=S["edu"], fontSize=8.5, textColor=GREY)))

    story += section("Languages")
    story.append(Paragraph(
        " &nbsp;•&nbsp; ".join(f"<b>{n}</b> — {l}" for n, l in LANGUAGES), S["edu"]))

    doc.build(story)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    build()
