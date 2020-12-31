
# Full Stack Open 2020, part 11: CI/CD, Exercise 1

**Author:** 
- Mika Honkanen, mika.honkanen@gmail.com

**Assumptions:** 

- The app referred in this exercise is:
-- being worked on by a team of about 6 people,
-- in active development and will be released soon, 
-- coded with **Python**. 

---
**Q1: Some common steps in a CI setup include  _linting_,  _testing_, and  _building_. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.**

Popular **combo-linters** for Python are for example:

- **Flake8** which combines
-- PyFlakes
-- pycodestyle
-- Mccabe
- **Pylama** which combines
-- pycodestyle
-- pydocstyle
-- PyFlakes
-- Mccabe
-- Pylint
-- Radon
-- gsjlint

Examples of some **stand-alone linters** for Python:

- Pylint
- PyFlakes
- pycodestyle
- pydocstyle
- Bandit
- MyPy

(_source: [Real Python / Python Code Quality: Tools & Best Practices](https://realpython.com/python-code-quality/#linters)_)

**Testing tool** examples for Python:

- PyUnit/UnitTest
- Python Robot Framework
- PyTest
- Python Behave
- Python Gauge
- Python Lettuce
- Python Jasmine
- Python Splinter
- Python Locust
- Python RedwoodHQ

(_source: [ESW eSoftware Associates Inc. / 10 Python Test Tools](https://www.eswcompany.com/python-test-tools-should-you-be-using/)_)

**Building tool** examples for Python:

- Bitbake
- Buildout
- distutils
- doit
- Fabric
- Invoke
- microbuild
- Paver
- PyBuilder
- pynt
- SCons
- Virtualenv
- Waf

(_source: [Wiki Python Org / Configuration and building tools](https://wiki.python.org/moin/ConfigurationAndBuildTools)_)

---

**Q2: What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!**

Open Source CI project examples:
* [Go CD](https://www.gocd.org/)
* [Bazel](https://bazel.build/)
* [BuildBot](https://buildbot.net/)
* [TeamCity](https://www.jetbrains.com/teamcity/)

(_source: [Full Stack Python / Continuous Integration](https://www.fullstackpython.com/continuous-integration.html)_)

Some other CI tool examples:

- [Buddy](https://buddy.works/)
- [Bamboo](https://www.atlassian.com/software/bamboo)
- [GitLab CI](https://about.gitlab.com/)
- [CircleCI](https://circleci.com/)
- [Codeship](https://www.cloudbees.com/products/codeship)
- [Integrity](http://integrity.github.io/)
- [Strider](https://github.com/Strider-CD/strider)
- [Autorabit](https://www.autorabit.com/)
- [Final builder](https://www.finalbuilder.com/)
- [Wercker](https://www.oracle.com/corporate/acquisitions/wercker/)
- [Buildkite](https://buildkite.com/)
- [Semaphore](https://semaphoreci.com/)
- [CruiseControl](http://cruisecontrol.sourceforge.net/)
- [Bitrise](https://github.com/bitrise-io/bitrise)
- [Urbancode](https://www.urbancode.com/)

(_source: [Guru 99 / 20 Best Continuous Integration Tools in 2021](https://www.guru99.com/top-20-continuous-integration-tools.html)_)

---

**Q3: Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?** 

Because the referred app project is relative small and it doesn't have any special requirements, the CI needs should be possible to cover with some **cloud-based** option. 

This is also supported by the facts that:
- A) the setup & configuration of cloud-based CI is usually less complicated compared to self-hosted options and
- B) with smaller project, the costs of cloud-hosted CI are low.

In order to make the decision, it would be good to understand better for example following aspects:

- How much money from the budget of the project can be reserved for the CI tools?
- What is the schedule requirement of the project? How much time/energy/resource can allocated for the CI work? 
- Does the project team has competence and time to maintain CI env by themselves? If not, would it be possible to outsource the whole CI work?
- Are there any needs to expand the project significantly in the near future?
- In the current project setup, are there perhaps some technical requirements that require some specific CI approach?
- Are the any plans and/or identified special requirements for the project in the near future? Which would perhaps require some special CI support?      

---