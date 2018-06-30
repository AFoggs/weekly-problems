For the final Weekly Problem, you’re going to consider APIs from the producer side—rather than the
consumer side we’ve focused on the last several weeks.

For this project, I want you to imagine an API that provides data about all courses coming up for
the next semester at IIT.

Come up with at least three API endpoints that return data. Think about the data that would be most
useful to include in such an API. For each endpoint, document the endpoint (e.g., `GET /courses`)
and include a JSON example of the data that someone can expect to be returned.

You can describe your API right in this README file. Follow the guidance at <http://jsonapi.org>
and consider the pretty dead-simple documentation of our old example friend, the GitHub API, in this
case, the endpoints for GitHub Issues: <https://developer.github.com/v3/issues/>

As always, post to Basecamp as you’re working on this problem.


**Endpoint 1: courses**

For this first endpoint, I would be grabbing relevant course data from the end point.
I've included the metadata, as [David Delgado](https://github.com/ddelgad5) has because
I believe it is important data for users to know whether the data they are looking at is recent.

```
GET /course
{
  "metadata" {
    "semester": "Fall, 2018"
    "last-update": "06-25-2018 18:40:38"
  },
  "data" [
  {
    "type": "course",
    "id": "193843"
    "attributes" [
    {
      "title": "Data APIs",
      "location": "Internet",
      "instructor": "Karl Stolley",
      "department": "ITM",
      "description": "A course to introduce students to Data API endpoints for deployment."
        }
      ]
    },
    {
      "type": "course",
      "id": "184536"
      "attributes" [
    {
        "title": "Sociology of Space",
        "location": "Wishnick Hall 184",
        "instructor": "Ullica Segerstrale",
        "department": "SOC",
        "description": "An introduction to the usage of space and its effect on humans."
        },
      ]
    }
  ]
}
```
**Endpoint 2: instructor**

With this endpoint, I included some basic data that most people would want on a professor,
but I also included a section for research, as sometimes professors are performing
research that students may be interested in. This way, users are able to figure out not only
the courses that an instructor teaches, but also what research they are interested in.

```
GET /instructor
{
  "metadata" {
    "semester": "Fall, 2018"
    "last-update": "06-25-2018 18:40:38"
  },
  "data" [
  {
    "type": "professor",,
    "id": "usegerstrale",
    "department": "SOC",
    "email": "ullica.segerstrale@gmail.com",
    "courses" [
    {
      "title": "Sociology of Space",
      "crn":184536,
      "link": "/course/184536"
        }
      ],
    "research" [
    {
        "topic": "Influence of room arrangement on mood",
        "sponsor": "Gerald Doyle",
        "run-time": "Fall 2018-Spring 2019"
        }
      ]
    },
    {
      "type": "professor",,
      "id": "kstolley",
      "department": "ITM",
      "email": "karl.stolley@gmail.com",
      "courses" [
      {
        "title": "Data APIs",
        "crn":193843 ,
        "link": "/course/193843"
        }
      ],
      "research" [
      {
          "topic": "Agile API Deployment: Improving UI/UX Faster",
          "sponsor": "Ray Trygstad",
          "run-time": "Fall 2018-Fall 2019"
          }
        ]
    },
  ]
}
```

**Endpoint 3: student**

With this one, I tried to make the endpoint a little more intricate, documenting
more information on the student than one would perhaps like, but also wouldn't
be unreasonable to have. While not directly relevant to courses, this information
would be useful in running analysis to see what members of which organizations take
which kinds of classes in order to better enable course recruitment and also to
improve upon course structure for each new semester.

```
GET /student

{
  "metadata" {
    "semester": "Fall, 2018"
    "last-update": "06-25-2018 18:40:38"
  },
  "data" [
  {
    "type": "student",
    "id": "193843",
    "name": "Antoine Foggs",
    "major": "ITM",
    "program": "Co-Terminal: School of Applied Technology",
    "Status": "Fourth Year: Undergraduate",
    "courses" [
      {
        "title": "Sociology of Space",
        "crn":184536,
        "link": "/course/184536"
      },
      {
        "title": "Data APIs",
        "crn":193843 ,
        "link": "/course/193843"
      }
      ],
    "organizations" [
      {
        "code": "05885"
        "name": "TEDxIIT",
        "position": "Vice President of Communications",
        "join-date": "02-06-2018"
      },
      {
        "code": "05798"
        "name": "Black Student Union",
        "position": "Member",
        "join-date": "09-23-2015"
      },
      ]
    },
  ]
}
```
