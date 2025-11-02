# Use Python 3.13
FROM python:3.13.3-bookworm

ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Copy requirements and install
COPY requirements.txt ./
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Copy the rest of the Django project
COPY . .

# Run Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]